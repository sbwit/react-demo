import React from "react";
import { Form, Row, Col, Input, Button, Card } from "antd";
import  "../../../css/form.css"
import {NavLink} from "react-router-dom";
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
class QueryForm extends React.Component{

    handleReset = () => {
        this.props.form.resetFields();
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
    }
    render (){
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="ant-advanced-search-form" > 
                <div className="span-title">
                   <span style={{ textAlign: 'left' }}>Activity Query</span>     
                </div>
                <Form  onSubmit={this.handleSearch}>
                    <Row >
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label='Activity ID' {...formItemLayout}>
                                {getFieldDecorator(`activityId`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Input is Activity ID" />
                                )}
                            </FormItem>    
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label='Activity Name' {...formItemLayout}>
                                {getFieldDecorator(`activityName`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Input is Activity Name" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row> 
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Search</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button> 
                            <NavLink to="/promo/actvity/query.htm/create">
                                <Button type="primary"   style={{ marginLeft: 8 }} onClick={this.handleReset}>Create</Button> 
                            </NavLink>
                        </Col>
                    </Row>
                </Form>
            </div>   
        )
    }
}
const QueryPageFrom = Form.create()(QueryForm);
export default QueryPageFrom;