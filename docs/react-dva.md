---
id: react-dva
title: react-dva常用代码
# sidebar_label: react-dva常用代码
# slug: /
---

## model initial

```
const initState = {}

export default {
  namespace: '',
  state: initState,
  effects: {},
  reducers: {},
  subscriptions: {}
}

```

## react component

```
import * as React from 'react'
import { connect } from 'dva'
import { Modal, Table, Form, Select } from 'antd'
import { Notification } from '../../../components'
const FormItem = Form.Item
const { Option } = Select

class FixStock extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default FixStock;

```

## 高度
```
const clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
```

## 表格
```
<Table
          dataSource={hisData}
          bordered
          scroll={{ x: 980 }}
          rowKey="id"
          rowSelection={{
            selectedRowKeys,
            onChange: this.onSelectChange
          }}
          onRow={record => {
            return{
              onClick: event =>{
                const newList = this.state.selectedRowKeys
                newList.indexOf(record.id) < 0 ?
                newList.push(record.id) :
                newList.splice(newList.indexOf(record.id), 1);
                this.setState({
                  selectedRowKeys: newList
                })
              }
            }
          }}
          loading={loading}
          locale={{
            emptyText: loading ? '加载中...' : '暂无数据'
          }}
          pagination={{
            current: hisCurrentPage,
            pageSize: hisPageSize,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50', '100'],
            total: totalRecord,
            onChange: this.handleChangePage,
            onShowSizeChange: this.handleChangePageSize,
            showTotal: (totalNum, range) =>
              `显示 ${range[0]} 到 ${range[1]},共有 ${totalNum} 条记录`,
          }}
        >
          {this.columns
            .map((column, i) => <Column {...column} key={i} />)}
          <Column
            dataIndex="action"
            title="操作"
            width={80}
            fixed="right"
            render={(text, record) =>
              <div>
                <Tooltip placement="top" title={'查看'}>
                  <a onClick={this.changeHisModalNode.bind(this, record, 0)}><i className="iconfont icon-detail" /></a>
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip placement="top" title={'修正'}>
                  <a onClick={this.changeHisModalNode.bind(this, record, 1)}><i className="iconfont icon-edit" /></a>
                </Tooltip>
              </div>
            }
          />
        </Table>
```

```
onSelectChange = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys
    })
  }
```
// model 导出封装
```
type KeyName = keyof typeof model.reducers | keyof typeof model.effects;
export const modelTypes = (keyName: KeyName) => `${model.namespace}/${keyName}`;
export default model;

```

// Hooks functional components style init component
```
import * as React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';

const Overview: React.FC<{ dispatch: Dispatch<AnyAction> }> = (props) => {
  const { dispatch } = props
  return (<div>
  </div >)
}

const mapState = (state) => ({
  overviewState: state.varietyStatisticsAnalysis.overviewState
})
export default connect(mapState)(Overview);

```