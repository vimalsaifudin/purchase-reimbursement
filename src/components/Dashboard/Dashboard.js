import React from 'react';
import DatePicker from "../DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      apiResponse: []
    }
  }

  validationSchema() {
    return Yup.object().shape({
      purchaseAmount: Yup.string().required('Purchase Amount is required'),
      purchaseDate: Yup.string().required('Purchase Date is required'),
      purchaseReceipt: Yup.string().required('Purchase Receipt is required')
    });
  }

  handleSubmit = async (values, { setSubmitting, resetForm }) => {

    await fetch('http://localhost:8080/reimburse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        purchaseAmount: values.purchaseAmount,
        purchaseDate: values.purchaseDate,
        purchaseDescription: values.purchaseDescription,
        receiptFile: values.purchaseReceipt,
        receiptFileName: values.purchaseReceipt.name,
        receiptFileType: values.purchaseReceipt.type,
        receiptFileSize: `${values.purchaseReceipt.size} bytes`
      }
      )
    })
    .then(response => response.json())
    .then((json) => {
      this.setState({ 
          apiResponse: [json]
        })
      }
    )  
    resetForm()

  }

  render() {
    const { apiResponse } = this.state;
    const initialValues = {
      purchaseAmount: '',
      purchaseDate: '',
      purchaseDescription: '',
      purchaseReceipt: ''
    };



    return (
      <div className="wrapper">
        <h1>Purchase Reimbursement Form</h1>
        <div className="purchase-form">
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}>
          {
          ({
              values,
              handleChange,
              setFieldValue,
              errors,
              touched,
              handleBlur,
              isValid,
              dirty
            }) => (
            
          <Form>
            <label>
              <p>Purchase Date <span style={{color: 'red'}} >*</span></p>
              <DatePicker 
              name="purchaseDate"
              onChange={setFieldValue}
              value={values.purchaseDate } 

              />
            </label>
            <ErrorMessage
                  name="purchaseDate"
                  component="div"
                  className="text-danger"
                />
            <label>
              <p>Purchase Amount <span style={{color: 'red'}} >*</span></p>
              <input 
              type="number" 
              name="purchaseAmount" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.purchaseAmount }    />
            </label>
            <ErrorMessage
                  name="purchaseAmount"
                  component="div"
                  className="text-danger"
                />
            <label>
              <p>Purchase Description</p>
              <textarea 
              name="purchaseDescription"
              value={values.purchaseDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              ></textarea>
            </label>

            <label>
              <p>Upload Receipt (PDF/Images)<span style={{color: 'red'}} >*</span></p>
              <input 
              name="purchaseReceipt" 
              type="file" 
              accept="application/pdf, image/*"
              onChange={(event) => {
                setFieldValue("purchaseReceipt", event.currentTarget.files[0]);
              }}
               />
            </label>
            <ErrorMessage
                  name="purchaseReceipt"
                  component="div"
                  className="text-danger"
                  style={{marginBottom: '10px'}}
                />


            <div>
              <input type="submit" />
            </div>
          </Form>
          )}
          </Formik>
          

{apiResponse && apiResponse.length > 0 &&
        <div className="responseText">
        <h2>Your purchase reimbursement request has been successfully submitted:</h2>
        {
          apiResponse.map((item) => ( 
            <table key = { item.purchaseAmount } >
              <tr><td>Purchase Date: </td><td>{ moment(item.purchaseDate).format('MM/DD/YYYY') }</td></tr>
              <tr><td>Purchase Amount: </td><td>{ item.purchaseAmount }</td></tr>
              <tr><td>Purchase Description: </td><td>{ item.purchaseDescription }</td></tr>
              {/* <tr><td>Purchase Receipt</td><td>{ item.receiptFile }</td></tr> */}
              <tr><td>Purchase Receipt File Name: </td><td>{ item.receiptFileName }</td></tr>
              <tr><td>Purchase Receipt File Type: </td><td>{ item.receiptFileType }</td></tr>
              <tr><td>Purchase Receipt File Size: </td><td>{ item.receiptFileSize }</td></tr>
            </table>
            ))
        }

        
      </div>

}







        </div>
        
      </div>
    );
  }
}

export default Dashboard;