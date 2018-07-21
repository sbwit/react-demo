import React from "react";
import {Form,Input,Select,Tooltip,Icon} from "antd"
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
        confirmDirty: false,
        autoCompleteResult: [],
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if(!err) {
                console.log('Received values of form: ',values);
            }
        })
        
    }
    
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    render() {
        const { autoCompleteResult } = this.state;
        const {form:{getFieldDecorator}  } = this.props;
       
    
        
        return (<div>
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="E-mail" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("email",{
                        rules:[{
                            type: 'email', message: '输入不是有效的电子邮件!',     
                        },{
                            required: true, message: '请输入您的电子邮件!',
                        }],
                    })(
                        <Input/>
                    )
                    }
                </FormItem>
                <FormItem label="Password" {...formItemLayout} hasFeedback>
                    {getFieldDecorator("password",{
                        rules:[{
                            required: true, message: '请输入您的密码!',   
                        },{
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )
                    }
                </FormItem>
                <FormItem  label="Confirm Password" {...formItemLayout} hasFeedback >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请确认您的密码!',
                        }, {
                        validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label={(<span>Nickname&nbsp;
                    <Tooltip title="What do you want other to call you?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                )} hasFeedback >
                {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                    <Input />
                )}
                </FormItem>
            </Form>
        </div>)
    }
}
const CreateFormPageFrom = Form.create()(CreateFormPage);
export default CreateFormPageFrom;