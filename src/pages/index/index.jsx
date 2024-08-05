import React from 'react'
import { View } from '@tarojs/components'
import { Button, Form, Uploader,Row,
  Input,
  TextArea, } from "@nutui/nutui-react-taro"
import './index.less'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
      <Demo3></Demo3>
    </View>
  )
}

export default Index

const Demo3 = () => {
  return (
    <>
      <Form divider labelPosition="right" footer={(
        <Row>
          <Button formType="submit" type="primary">提交</Button>
        </Row>
      )}>
         <Form.Item name="file">
          <Uploader accept="."></Uploader>
        </Form.Item>
        <Form.Item label="字段A" name="username" rules={[{required:true}]}>
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item label="字段D" name="address" shouldUpdate noStyle rules={[{required:true}]}>
          {({ getFieldValue }) => {
            const value = getFieldValue('username')
            if (!value) return null
            return <Input placeholder="字段D" />
          }}
        </Form.Item>
      </Form>
    </>
  )
}
