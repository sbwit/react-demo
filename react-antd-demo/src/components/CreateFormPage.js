import React from "react";
import {Form,Input,Select,Tooltip,Icon,Button} from "antd"
import PriceInput from "./PriceInput"
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

class CreateFormPage extends React.Component  {
    
    state = {
        amount:null,
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if(!err) {
                console.log('Received values of form: ',values);
            }
        })
        
    }
     
    handleAmountChange=(rule,value,callback)=>{
        const amount = parseInt(value || 0, 10);
        const form = this.props.form;
        if (isNaN(amount)) {
            form.validateFields(['amount2'], { force: true });
        }
        callback();
        
    }
  
    render() {
        const {form:{getFieldDecorator}  } = this.props;
        
        return (<div style={{width:"50%"}}>
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Activity Id Desc" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("activityIdDesc",{
                        rules:[{
                            required: true, message: 'Please input Activity Id Desc,This is Required!',
                        },{
                            max:16,message: 'Activity Id Desc Maximum value of 16 characters!',
                        }],
                    })(
                        <Input/>
                    )
                    }
                </FormItem>
                <FormItem label="Amount" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("amount",{
                        rules:[{
                            required: false, message: 'Please input amount,This is Required!!',
                        }],
                    })(
                        <PriceInput />
                    )}
                </FormItem>
              
                <FormItem label="Amount2" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("amount2",{
                        rules:[{
                            required: false, message: 'Please input amount,This is Required!!',
                        },{
                            validator: this.handleAmountChange
                        }],
                    })(
                        <Input addonAfter="IDR"    />
                    )
                    }
                </FormItem> 
               
                <FormItem {...formItemLayout} label={(<span>ArawdInfo&nbsp;
                    <Tooltip title="{key:[xxxx,xxxx,xxxx]}">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                )} hasFeedback >
                {getFieldDecorator('arawdInfo', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                   <Input addonBefore={"goodIds"} />
                 )}
                </FormItem>
                
                <FormItem {...formItemLayout} label="RuleUUID" hasFeedback >
                {getFieldDecorator('RuleUUID1', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                    <Input  prefix={(<Tooltip title='For multiple values, please divide it by "|";&nbsp;&nbsp;example: xxxxxx|xxxxxx|xxxxxxx'>
                            <Icon type="question-circle-o" />
                             </Tooltip>)} 
                             />
                 )}
                </FormItem>
                
                <FormItem {...formItemLayout} label="RuleUUID2"  hasFeedback>
                {getFieldDecorator('RuleUUID2', {
                    rules: [{ required: true, message: 'Please input your RuleUUID2!'}],
                })(
                    
                    <Input.TextArea  rows={4}/>
                 )}
                </FormItem>

                <FormItem {...formItemLayout} label="RuleUUID3"  hasFeedback>
                {getFieldDecorator('RuleUUID3', {
                    rules: [{ required: true, message: 'Please input your RuleUUID3!'}],
                })(
                    <Input.TextArea rows={4}  />
                    
                 )}
                </FormItem>
                <FormItem {...formItemLayout} label="RuleUUID3"  hasFeedback  help={'For multiple values, please divide it by"," ;   example:   xxxxxx,xxxxxx,xxxxxxx'}>
                {getFieldDecorator('RuleUUID4', {
                    rules: [{ required: true, message: 'Please input your RuleUUID3!'}],
                })(
                    <Input.TextArea rows={4}  />
                 )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        </div>)
    }
}
const CreateFormPageFrom = Form.create()(CreateFormPage);
export default CreateFormPageFrom;