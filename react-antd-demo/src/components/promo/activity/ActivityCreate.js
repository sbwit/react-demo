import React from "react";
import { Form, Row, Col, Input, Button, Card,Select} from "antd";
import {TypeEnum,SubTypeEnum,TriggerTypeEnum,AppliedBizTypeEnum,BizSubTypeEnum,EnvNameEnum,HoldModeEnum,PriorityEnum,SceneEnum} from "./HardCode"
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
  const formItemLineLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
class ActivityCreate extends React.Component{


    handleReset = () => {
        this.props.form.resetFields();
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
    }
    render(){

        const formItem = {
            activityIdDesc:"Activity Id Desc",
            activityName:"Activity Name",
            priority:"Priority",
            type:"Type",
            subType:"Sub Type",
            scene:"Scene",
            envName:"Env.Name",
            pubdate:"Begin/End Date",
            triggerType:"Trigger Type",
            appliedBizType:"Applied Biz Type",
            bizSubType:"Biz Sub Type",
            category:"Category",
            holdMode:"Hold Mode",
            description:"Description",
            budget:"Budget",
            investor:"Investor",
            awarder:"Awarder",
            status:"Status",
            ruleUuids:"Rule Uuids",
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="Create Activity">
                <Form  onSubmit={this.handleSearch}>
                    <Row>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.activityIdDesc} {...formItemLayout}>
                                {getFieldDecorator(`activityIdDesc`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Activity Id Desc" />
                                )}
                            </FormItem>    
                        </Col> 
                    </Row> 
                    <Row >
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.activityName} {...formItemLineLayout}>
                                {getFieldDecorator(`activityName`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Activity Id Desc" />
                                )}
                            </FormItem>    
                        </Col> 
                    </Row> 
                    <Row >
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.priority} {...formItemLayout}>
                                {getFieldDecorator(`priority`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Priority">
                                        {
                                            PriorityEnum.map((item,index)=>(
                                                 <Option  key={index} value={item.label}>{item.value}</Option>
                                           ))
                                        }
                                    </Select>
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.type} {...formItemLayout}>
                                {getFieldDecorator(`type`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Type">
                                    {
                                        TypeEnum.map((item,index)=>(
                                             <Option  key={index} value={item.label}>{item.value}</Option>
                                       ))
                                    }
                                    </Select>
                                )}
                            </FormItem> 
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.subType} {...formItemLayout}>
                                {getFieldDecorator(`subType`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Sub Type">
                                    {
                                        SubTypeEnum.map((item,index)=>(
                                             <Option  key={index} value={item.label}>{item.value}</Option>
                                       ))
                                    }
                                    </Select>
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.scene} {...formItemLayout}>
                                {getFieldDecorator(`scene`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Scene">
                                    {
                                        SceneEnum.map((item,index)=>(
                                             <Option  key={index} value={item.label}>{item.value}</Option>
                                       ))
                                    }
                                    </Select>
                                )}
                            </FormItem> 
                        </Col>
                    </Row> 
                    <Row >
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.envName} {...formItemLayout}>
                                {getFieldDecorator(`envName`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Env.Name">
                                    {
                                        EnvNameEnum.map((item,index)=>(
                                             <Option  key={index} value={item.label}>{item.value}</Option>
                                       ))
                                    }
                                    </Select>
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.pubdate} {...formItemLayout}>
                                {getFieldDecorator(`pubdate`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Pubdate" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row> 
                    <Row >
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.triggerType} {...formItemLayout}>
                                {getFieldDecorator(`triggerType`,{
                                // rules: [{}]
                                })(
                                    <Select placeholder="Please Input Trigger Type">
                                    {
                                        TriggerTypeEnum.map((item,index)=>(
                                             <Option  key={index} key={index} value={item.label}>{item.value}</Option>
                                       ))
                                    }
                                    </Select>
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.appliedBizType} {...formItemLayout}>
                                {getFieldDecorator(`appliedBizType`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Applied Biz Type" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row> 
                    <Row>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.bizSubType} {...formItemLayout}>
                                {getFieldDecorator(`bizSubType`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Biz Sub Type" />
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.category} {...formItemLayout}>
                                {getFieldDecorator(`category`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Category" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.holdMode} {...formItemLayout}>
                                {getFieldDecorator(`holdMode`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Hold Mode" />
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.budget} {...formItemLayout}>
                                {getFieldDecorator(`budget`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Budget" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.investor} {...formItemLayout}>
                                {getFieldDecorator(`investor`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Investor" />
                                )}
                            </FormItem>    
                        </Col> 
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.awarder} {...formItemLayout}>
                                {getFieldDecorator(`awarder`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Awarder" />
                                )}
                            </FormItem> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.status} {...formItemLayout}>
                                {getFieldDecorator(`status`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Status" />
                                )}
                            </FormItem>    
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.ruleUuids} {...formItemLineLayout}>
                                {getFieldDecorator(`ruleUuids`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Rule Uuids" />
                                )}
                            </FormItem>    
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <FormItem label={formItem.description} {...formItemLineLayout}>
                                {getFieldDecorator(`description`,{
                                // rules: [{}]
                                })(
                                    <Input placeholder="Please Input Description" />
                                )}
                            </FormItem>    
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Colse</Button> 
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }
}
const ActivityCreateFrom = Form.create()(ActivityCreate);
export default ActivityCreateFrom;