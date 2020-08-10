/*
 * @Author: yanjun.zsj
 * @LastEditors  : yanjun.zsj
 * @Date: 2019-03-11 16:43:26
 * @LastEditTime : 2020-01-19 15:21:57
 */
/* eslint-disable */
const sourceCols = [
  { title: '源表字段', key: 'name', width: '80px' },
  { title: '类型', key: 'type', width: '100px' },
  { title: '描述', key: 'desc', width: '150px' },
  { title: '操作', key: 'operate', width: '80px', align: 'center', render: (value, record) => {
    return <a href="#" onClick={
      () => {
        alert(JSON.stringify(record));
      }
    }>查看详情</a>;
  }}
];
const targetCols = [
  { title: '目标表字段', key: 'name', width: '50%' },
  { title: '类型', key: 'type', width: '50%' }
];
class App extends React.PureComponent {
  mapping = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      relation: [{
        source: {
          name: "field1",
          type: "xxxxxx",
          key: "field1"
        },
        target: {
          name: "field5",
          type: "xxxxxx",
          key: "field5"
        }
      }],
      sourceData: new Array(7).fill().map((item, idx) => ({
        name: `field${idx + 1}`,
        type: 'string',
        key: `field${idx + 1}`,
        desc: `这是表字段field${idx + 1}`,
        operate: `测试${idx}`
      })),
      targetData: new Array(11).fill().map((item, idx) => ({
        name: `field${idx + 4}`,
        type: 'string',
        key: `field${idx + 4}`
      }))
    };
  }
  getRelation() {
    const relation = this.state.relation;
    alert(JSON.stringify(relation));
  }
  sameLine() {
    const {sourceData, targetData} = this.state;
    const len = sourceData.length > targetData.length ? targetData.length : sourceData.length;
    const relation = [];
    for(let i=0; i<len; i++ ) {
      relation.push({
        source: sourceData[i],
        target: targetData[i]
      });
    }
    this.setState({
      relation
    });
  }
  sameName() {
    const {sourceData, targetData} = this.state;
    const relation = [];
    sourceData.map(item => {
      targetData.map(n => {
        if(item.key === n.key) {
          relation.push({
            source: item,
            target: n
          });
        }
      });
    });
    this.setState({
      relation
    });
  }
  cancelRelation() {
    this.setState({
      relation: []
    });
  }
  render() {
    const { sourceData, targetData } = this.state;
    // const option = {
    //   source: {
    //     data: sourceData,
    //     onChange: (data) => { // isSort开启后，必须开启才会生效
    //       this.setState({
    //         sourceData: data
    //       });
    //     },
    //     columns: sourceCols,
    //     mutiple: true
    //   },
    //   target: {
    //     data: targetData,
    //     onChange: (data) => {
    //       this.setState({
    //         targetData: data
    //       });
    //     },
    //     columns: targetCols,
    //     mutiple: true
    //   },
    //   relation: this.state.relation,
    //   // onDrawStart: (source, relation) => {
    //   //   console.log("onDrawStart: ", source, relation);
    //   // },
    //   // onDrawing: (source, relation) => {
    //   //   console.log("onDrawing: ", source, relation);
    //   // },
    //   // onDrawEnd: (source, target, relation) => {
    //   //   console.log("onDrawEnd: ", source, relation);
    //   // },
    //   onChange: (relation) => {
    //     this.setState({
    //       relation
    //     });
    //   },
    //   isSort: true,
    //   edit: false,

    // };
    const option = {"source":{"data":[{"name":"TBL_ID","type":"bigint(20)","comment":"","key":"source-TBL_ID","iconShow":"inherit"},{"name":"CREATE_TIME","type":"int(11)","comment":"","key":"source-CREATE_TIME","iconShow":"inherit"},{"name":"DB_ID","type":"bigint(20)","comment":"","key":"source-DB_ID","iconShow":"inherit"},{"name":"LAST_ACCESS_TIME","type":"int(11)","comment":"","key":"source-LAST_ACCESS_TIME","iconShow":"inherit"},{"name":"OWNER","type":"varchar(767)","comment":"","key":"source-OWNER","iconShow":"inherit"},{"name":"OWNER_TYPE","type":"varchar(10)","comment":"","key":"source-OWNER_TYPE","iconShow":"inherit"},{"name":"RETENTION","type":"int(11)","comment":"","key":"source-RETENTION","iconShow":"inherit"},{"name":"SD_ID","type":"bigint(20)","comment":"","key":"source-SD_ID","iconShow":"inherit"},{"name":"TBL_NAME","type":"varchar(256)","comment":"","key":"source-TBL_NAME","iconShow":"inherit"},{"name":"TBL_TYPE","type":"varchar(128)","comment":"","key":"source-TBL_TYPE","iconShow":"inherit"},{"name":"VIEW_EXPANDED_TEXT","type":"mediumtext","comment":"","key":"source-VIEW_EXPANDED_TEXT","iconShow":"inherit"},{"name":"VIEW_ORIGINAL_TEXT","type":"mediumtext","comment":"","key":"source-VIEW_ORIGINAL_TEXT","iconShow":"inherit"},{"name":"IS_REWRITE_ENABLED","type":"bit(1)","comment":"","key":"source-IS_REWRITE_ENABLED","iconShow":"inherit"}],"columns":[{"title":"来源表字段","key":"name","width":"50%"},{"title":"类型","key":"type","width":"50%"}]},"target":{"data":[{"name":"TBL_ID","type":"BIGINT","comment":null,"key":"target-TBL_ID","iconShow":"inherit"},{"name":"CREATE_TIME","type":"BIGINT","comment":null,"key":"target-CREATE_TIME","iconShow":"inherit"},{"name":"DB_ID","type":"BIGINT","comment":null,"key":"target-DB_ID","iconShow":"inherit"},{"name":"LAST_ACCESS_TIME","type":"BIGINT","comment":null,"key":"target-LAST_ACCESS_TIME","iconShow":"inherit"},{"name":"OWNER","type":"VARCHAR","comment":null,"key":"target-OWNER","iconShow":"inherit"},{"name":"OWNER_TYPE","type":"VARCHAR","comment":null,"key":"target-OWNER_TYPE","iconShow":"inherit"},{"name":"RETENTION","type":"BIGINT","comment":null,"key":"target-RETENTION","iconShow":"inherit"},{"name":"SD_ID","type":"BIGINT","comment":null,"key":"target-SD_ID","iconShow":"inherit"},{"name":"TBL_NAME","type":"VARCHAR","comment":null,"key":"target-TBL_NAME","iconShow":"inherit"},{"name":"TBL_TYPE","type":"VARCHAR","comment":null,"key":"target-TBL_TYPE","iconShow":"inherit"},{"name":"VIEW_EXPANDED_TEXT","type":"VARCHAR","comment":null,"key":"target-VIEW_EXPANDED_TEXT","iconShow":"inherit"},{"name":"VIEW_ORIGINAL_TEXT","type":"VARCHAR","comment":null,"key":"target-VIEW_ORIGINAL_TEXT","iconShow":"inherit"},{"name":"IS_REWRITE_ENABLED","type":"VARCHAR","comment":null,"key":"target-IS_REWRITE_ENABLED","iconShow":"inherit"}],"columns":[{"title":"目标表字段","key":"name","width":"50%"},{"title":"类型","key":"type","width":"50%"}]},"relation":[{"source":{"name":"TBL_ID","type":"bigint(20)","key":"source-TBL_ID","x":270,"y":59},"target":{"iconShow":"hidden","x":-417,"name":"TBL_ID","y":-568,"type":"BIGINT","key":"target-TBL_ID"}},{"source":{"name":"CREATE_TIME","type":"int(11)","key":"source-CREATE_TIME","x":270,"y":98},"target":{"iconShow":"hidden","x":-417,"name":"CREATE_TIME","y":-568,"type":"BIGINT","key":"target-CREATE_TIME"}},{"source":{"name":"DB_ID","type":"bigint(20)","key":"source-DB_ID","x":270,"y":137},"target":{"iconShow":"hidden","x":-417,"name":"DB_ID","y":-568,"type":"BIGINT","key":"target-DB_ID"}},{"source":{"name":"LAST_ACCESS_TIME","type":"int(11)","key":"source-LAST_ACCESS_TIME","x":270,"y":176},"target":{"iconShow":"hidden","x":-417,"name":"LAST_ACCESS_TIME","y":-568,"type":"BIGINT","key":"target-LAST_ACCESS_TIME"}},{"source":{"name":"OWNER","type":"varchar(767)","key":"source-OWNER","x":270,"y":215},"target":{"iconShow":"hidden","x":-417,"name":"OWNER","y":-568,"type":"VARCHAR","key":"target-OWNER"}},{"source":{"name":"OWNER_TYPE","type":"varchar(10)","key":"source-OWNER_TYPE","x":270,"y":254},"target":{"iconShow":"hidden","x":-417,"name":"OWNER_TYPE","y":-568,"type":"VARCHAR","key":"target-OWNER_TYPE"}},{"source":{"name":"RETENTION","type":"int(11)","key":"source-RETENTION","x":270,"y":293},"target":{"iconShow":"hidden","x":-417,"name":"RETENTION","y":-568,"type":"BIGINT","key":"target-RETENTION"}},{"source":{"name":"SD_ID","type":"bigint(20)","key":"source-SD_ID","x":270,"y":332},"target":{"iconShow":"hidden","x":-417,"name":"SD_ID","y":-568,"type":"BIGINT","key":"target-SD_ID"}},{"source":{"name":"TBL_NAME","type":"varchar(256)","key":"source-TBL_NAME","x":270,"y":371},"target":{"iconShow":"hidden","x":-417,"name":"TBL_NAME","y":-568,"type":"VARCHAR","key":"target-TBL_NAME"}},{"source":{"name":"TBL_TYPE","type":"varchar(128)","key":"source-TBL_TYPE","x":270,"y":410},"target":{"iconShow":"hidden","x":-417,"name":"TBL_TYPE","y":-568,"type":"VARCHAR","key":"target-TBL_TYPE"}},{"source":{"name":"VIEW_EXPANDED_TEXT","type":"mediumtext","key":"source-VIEW_EXPANDED_TEXT","x":270,"y":449},"target":{"iconShow":"hidden","x":-417,"name":"VIEW_EXPANDED_TEXT","y":-568,"type":"VARCHAR","key":"target-VIEW_EXPANDED_TEXT"}},{"source":{"name":"VIEW_ORIGINAL_TEXT","type":"mediumtext","key":"source-VIEW_ORIGINAL_TEXT","x":270,"y":488},"target":{"iconShow":"hidden","x":-417,"name":"VIEW_ORIGINAL_TEXT","y":-568,"type":"VARCHAR","key":"target-VIEW_ORIGINAL_TEXT"}},{"source":{"name":"IS_REWRITE_ENABLED","type":"bit(1)","key":"source-IS_REWRITE_ENABLED","x":270,"y":527},"target":{"iconShow":"hidden","x":-417,"name":"IS_REWRITE_ENABLED","y":-568,"type":"VARCHAR","key":"target-IS_REWRITE_ENABLED"}}],"isSort":false,"edit":false}
    return <div>
      <div>
        <div style={{
          width: 800
        }}>
          <FieldMapping {...option} />
          <br/>
          <button onClick={this.getRelation.bind(this)}>获取映射关系</button>
          <button onClick={this.sameLine.bind(this)}>同行关联</button>
          <button onClick={this.sameName.bind(this)}>同名关联</button>
          <button onClick={this.cancelRelation.bind(this)}>取消关联</button>
        </div>
      </div>
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('Test')
);