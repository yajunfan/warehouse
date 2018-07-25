<template>
  <div class="grid_container">
      <!-- :span-method="objectSpanMethod" -->
      <h4>API文档 -- 网格选项(https://angular-ui.github.io/ui-grid/)</h4>
    <el-table :data="tableData1" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
      <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="名称"   header-align="left"></el-table-column>
      <el-table-column prop="default" label="默认值" header-align="left"></el-table-column>
      <el-table-column prop="define" label="定义" header-align="left"></el-table-column>
    </el-table>
    <h4>列定义选项</h4>
    <el-table :data="tableData2" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
      <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="名称"  header-align="left"></el-table-column>
      <el-table-column prop="default" label="默认值" header-align="left"></el-table-column>
      <el-table-column prop="define" label="定义" header-align="left"></el-table-column>
    </el-table>
    <h4>ng-grid：问题总结</h4>
    <el-table :data="tableData3" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
     <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="名称"   header-align="left"></el-table-column>
      <el-table-column prop="define" label="定义" header-align="left"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      previewimg:"",
      prewflag:false,
      tableData1:[
        {
          name: '主键约束（primaryKey）',
          default: 'undefined',
          define:'用户的数据,应该是唯一的。允许你自动更新选择状态之前加载数据。'
        },
        {
          name: '聚合模板（aggregateTemplate）',
          default: '<div ng-click="row.toggleExpand()" ng-style="{left: row.offsetleft}" class="ngAggregate">'+
          '<span class="ngAggregateText">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}} {{AggItemsLabel}})</span>'+
          '<div class="{{row.aggClass()}}"></div></div>',
          define:'定义一个聚合模板自定义行分组。看到github wiki的更多细节'
        },
        {
          name: '选择后改变（afterSelectionChange）',
          default: ' function (rowItem, event) {}',
          define:'回调后当你想验证一些选择。'
        },
        {
          name: '选择前改变（beforeSelectionChange）',
          default: 'function (rowItem, event) { return true; }',
          define:'回调之前如果你想检查什么选择,如果你想取消选择返回false。否则返回true。如果你需要等待一个异步调用来进行选择可以使用'+
          'rowItem.continueSelection最初(事件)方法后返回false。注意:当shift +选择多个项目网格中的这只被调用一次,rowItem将排队的数组项被选中。'
        },
        {
          name: '复选框单元模板（checkboxCellTemplate）',
          default: 'div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected" /></div>',
          define:'复选框单元模板。'
        },
        {
          name: '复选框头模板（checkboxHeaderTemplate）',
          default: '<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="allSelected" ng-change="toggleSelectAll(allSelected)"/>',
          define:'复选框标题模板'
        },
        {
          name: '列定义（columnDefs）',
          default: 'undefined',
          define:'数组定义的列,如果没有定义列是自动生成的。'
        },
        {
          name: '数据（data）',
          default: '[]',
          define:'数据显示在网格中。数组中的每一项映射到行显示。'
        },
        {
          name: '单元格可编辑（enableCellEdit）',
          default: ' false',
          define:'在全球范围内允许所有的细胞都是可编辑的。使用editableCellTemplate选项来覆盖默认的文本输入'
        },
        {
          name: '单元格的可选择（enableCellSelection）',
          default: 'false',
          define:'启用或禁用手机导航和选择'
        },
        {
          name: '使列调整（enableColumnResize）',
          default: 'false',
          define:'启用或禁用调整的列'
        },
        {
          name: '使列重新排序（enableColumnReordering）',
          default: 'false',
          define:'启用或禁用重新排序的列'
        },
        {
          name: '高亮（enableHighlighting）',
          default: 'false',
          define:'启用或禁用表格内容选择'
        },
        {
          name: '启用分页（enablePaging）',
          default: ' undefined',
          define:'使服务器端分页功能'
        },
        {
          name: '使行重新排序（enableRowReordering）',
          default: 'false',
          define:'支持拖拽行重新排序。只适用于HTML5浏览器兼容。'
        },
        {
          name: '使行选择（enableRowSelection）',
          default: 'true',
          define:'在网格能够选择行。(2.0之前canSelectRows)'
        },
        {
          name: '启用排序（enableSorting）',
          default: 'true',
          define:'启用或禁用在网格排序。'
        },
        {
          name: '过滤选项（filterOptions）',
          default: "{ filterText: '', useExternalFilter: false }",
          define:'过滤文本:文本绑定到内置的搜索框。使用外部过滤器:绕过内部过滤如果你想使用自己的过滤机制,但想要使用内置的搜索框。'
        },
        {
          name: '页脚行高（footerRowHeight）',
          default: "55",
          define:'定义像素的页脚的高度'
        },
        {
          name: '组（groups）',
          default: "[]",
          define:'初始字段对数据进行分组。字段名称的数组,而不是显示名称'
        },
        {
          name: '默认组倒塌（groupsCollapsedByDefault ）',
          default: "TRUE",
          define:'当启用分组崩溃条目'
        },
        {
          name: '标题行高度（headerRowHeight）',
          default: "32",
          define:'标题行像素的高度。'
        },
        {
          name: '标题行模板（headerRowTemplate）',
          default: "undefined",
          define:'定义一个标题行进一步定制的模板'
        },
        {
          name: '初始化（init）',
          default: "function(grid, $scope) { }",
          define:'函数被称为一旦网格初始化。'
        },
        {
          name: 'jquery UI可拖动的（jqueryUIDraggable）',
          default: "FALSE",
          define:'可以使用jquery UI reaggable /可抛弃的插件。如果启用需要jqueryUI工作。有用的如果你想拖+下降但用户坚持蹩脚的浏览器。'
        },
        {
          name: 'jquery UI主题（jqueryUITheme）',
          default: "FALSE",
          define:'过滤文本:文本绑定到内置的搜索框。使用外部过滤器:绕过内部过滤如果你想使用自己的过滤机制,但想要使用内置的搜索框。'
        },
        {
          name: '保持最后的选择（keepLastSelected）',
          default: "TRUE",
          define:'防止unselections ini单一选择模式'
        },
        {
          name: '保持列比率（maintainColumnRatios）',
          default: " undefined",
          define:'保持在调整列宽。默认值为true时使用*的或未定义的宽度。可以重载设置为false'
        },
        {
          name: '多选择（multiSelect）',
          default: "TRUE",
          define:'设置为true，表示表头最开始有多选框，点击，下面的全部被选择；设置为false,如果你只想要一次一项选择'
        },
        {
          name: '没有键盘导航（noKeyboardNavigation）',
          default: "FALSE",
          define:'禁用键盘导航'
        },
        {
          name: '分页选项（pagingOptions）',
          default: "{ pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 }",
          define:'页大小:可用页面大小的列表。页大小:当前选择的页面大小。总服务器项目:总服务器上的项目。当前页:嗯……当前页面。'
        },
        {
          name: '插件（plugins）',
          default: "[]",
          define:'注册在ng-grid一系列插件功能'
        },
        {
          name: '行高（rowHeight）',
          default: "30",
          define:'行高的行网格'
        },
        {
          name: '行模板（rowTemplate）',
          default: '<div ng-style="{ cursor: row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()"'+
                   'class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" '+
                   'ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>',
          define:'定义模板定制输出一行'
        },
        {
          name: '选定的项目（selectedItems）',
          default: "[]",
          define:'所有的物品在网格中选择。在单一选择模式只有一个条目数组中。'
        },
        {
          name: '选择复选框（selectWithCheckboxOnly）',
          default: "FALSE",
          define:'禁用行选择通过单击行只有当单击复选框。'
        },
        {
          name: '显示列菜单（showColumnMenu）',
          default: "FALSE",
          define:'如果显示列菜单和显示过滤器都是假菜单按钮将不会显示。'
        },
        {
          name: '显示过滤器（showFilter）',
          default: "FALSE",
          define:'使过滤箱的显示列菜单。如果显示列菜单和显示过滤器都是假菜单按钮将不会显示。'
        },
        {
          name: '显示页脚（showFooter）',
          default: "FALSE",
          define:'显示或隐藏页脚页脚默认情况下是禁用的'
        },
        {
          name: '显示组面板（showGroupPanel）',
          default: "FALSE",
          define:'拖拽分组显示了降级区'
        },
        {
          name: '排序呢信息（sortInfo）',
          default: "{ fields: [], directions: [] }",
          define:'定义一个排序信息对象指定一个默认的排序状态。你也可以观察这个变量利用服务器端排序(见使用外部排序)。'+
          "语法是sortInfo:{字段:[' fieldName1 ',' fieldName2 '],方向:[‘asc’,‘desc]}。方向是不区分大小写的"
        },
        {
          name: '显示选择复选框（showSelectionCheckbox）',
          default: "FALSE",
          define:'行选择复选框显示为第一列。(2.0之前显示选择复选框)'
        },
        {
          name: '标签索引（tabIndex）',
          default: "0",
          define:'设置选项卡视图的索引。'
        },
        {
          name: '使用的外部排序（useExternalSorting）',
          default: "FALSE",
          define:'防止内部排序执行。排序的排序信息对象将更新信息,这样你就可以处理排序(见信息排序)'
        },
        {
          name: '选择一行（selectRow）',
          default: "function (rowIndex, state)",
          define:'函数是附加到specifiec网格选项为用户编程选择行不管相关的实体'
        },
        {
          name: '选择项（selectItem）',
          default: "function (itemIndex, state)",
          define:'函数是附加到specifiec网格选项为用户编程选择行基于enitity数据数组的索引选项'
        },
        {
          name: '全选（selectAll）',
          default: " function (state)",
          define:'函数是附加到specifiec网格选项为用户编程上设置所选国家传递值的所有行。'
        },

      ],
      tableData2: [
        {
          name: 'gg标签过滤器（aggLabelFilter）',
          default: "",
          define:'过滤器使用的字符串名称总标签(“货币”、“日期”等. .)如果不设置默认为表格过滤器。'
        },  
        {
          name: '表格类名（cellClass）',
          default: "",
          define:'附加一个css类列表'
        },  
        {
          name: '表格筛选（cellFilter）',
          default: "",
          define:'字符串名称过滤器使用在细胞(“货币”、“日期”等. .)'
        },  
        {
          name: '单元格模板（cellTemplate）',
          default: '<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>',
          define:'设置单元格列的模板'
        },  
        {
          name: '显示名称（displayName）',
          default: "field",
          define:'设置列的漂亮的显示名称。默认是给定的字段'
        },  
        {
          name: '可编辑单元格模板（editableCellTemplate）',
          default: "<input ng-class='colt' ng-input='COL_FIELD' />",
          define:'设置可编辑的单元格的列的模板。双击时显示用户使用启用集中单元格编辑和单元格聚焦。'
        },  
        {
          name: '使单元格编辑（enableCellEdit）',
          default: "FALSE",
          define:'显示当用户没有专注于单元格模板。当用户关注单元格显示可编辑单元模板。'
        },  
        {
          name: '名称（field）',
          default: "",
          define:'属性的字符串名称你想要在您的数据模型,列代表。也可以在数据模型属性路径。“foo.bar。myField”、“名称。第一,等。'
        },  
        {
          name: '可分组的（groupable）',
          default: "TRUE",
          define:'TRUE'
        },  
        {
          name: '标题单元格模板（headerCellTemplate）',
          default: '<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{‘cursor’: col.cursor}" ng-class="{ ‘ngSorted’: !noSortVisible }">'+
          '<div ng-click="col.sort($event)" ng-class="colt" class="ngHeaderText">{{col.displayName}}</div><div class="ngSortButtonDown" '+
          'ng-show="col.showSortButtonDown()"></div><div class="ngSortButtonUp" ng-show="col.showSortButtonUp()"></div><div class="ngSortPriority">'+
          '{{col.sortPriority}}</div><div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable">'+
          '</div></div><div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>"',
          define:'设置模板列标题单元格'
        },
        {
          name: '头类（headerClass）',
          default: "",
          define:'附加一个css类列标题。'
        }, 
        {
          name: '最大宽度（maxWidth）',
          default: "9000",
          define:'设置列的最大宽度。'
        }, 
        {
          name: '最小宽度（minWidth）',
          default: "50",
          define:'设置列的最小宽度。'
        },   
        {
          name: '固定（pinnable）',
          default: "TRUE",
          define:'是否可以固定在左列。'
        }, 
        {
          name: '可调整大小的（resizable）',
          default: "TRUE",
          define:'是否可调整列的大小。'
        }, 
         {
          name: '可分类的（sortable）',
          default: "TRUE",
          define:'是否可调整列的大小。'
        }, 
         {
          name: 'Fn排序（sortFn）',
          default: "根据检测到的数据类型",
          define:'设置函数列进行排序。有用的,当你在一个不寻常的方式格式化的数据或者如果你想在一个基本数据类型。检查MDN类文档的例子'
        }, 
         {
          name: '可见（visible）',
          default: "TRUE",
          define:'是否默认列是可见的。可以覆盖由用户在运行时如果显示列菜单是正确的。'
        }, 
        {
          name: '宽度（width）',
          default: "",
          define:'设置列的宽度。可以是一个固定宽度的像素作为一个int(42),字符串px(42 px),字符串百分比(42%)、加权星号(*宽度除以总数量的年代都是列定义宽度)的详细信息,请参阅github wiki。'
        }
      ],
      tableData3:[
        {
          name: '表格下方会出现滚动条',
          define:'解决方式：一般是给.ng-row设置了border，把左右border去掉即可'
        },
        
        {
          name: '表格需要增加一个大标题列',
          define:"解决方式：在gridOptions中设置 showGroupPanel:true,并且window.ngGrid.i18n['en'] = { ngGroupPanelDescription: '线下数据源-电核任务' };重新赋值即可"
        },
        {
          name: '设置斑马条',
          define:'css中设置 .ngRow.odd{background: #cde8ff; }'
        },
        {
          name: '设置下border',
          define:'css中设置 .ngCell{border-bottom:1px solid #d4d4d4;}'
        },
        {
          name: '增加搜索功能',
          define:'解决方式：在gridOptions中设置showFilter:true,'
        },
        {
          name: '给特定的一列增加样式或者效果',
          define:"解决方式：在gridOptions -- > columnDefs -->中设置cellClass:'noCenter',然后给这个类名增加样式就可以了"
        },
        {
          name: '获取指定的一行',
          define:'使用row作为参数进行传参，使用他上面的方法和属性（在grid表格加载完之后才可以使用）'
        },
        {
          name: "出现错误Cannot set property 'gridDim' of undefined",
          define:'.在js中没有对$scope.gridOptions进行定义配置，2.浏览器缓存，重新打开'
        },
        {
          name: '死活不出现数据，不报错',
          define:'css中设置 .ngRow.odd{background: #cde8ff; }'
        },
        {
          name: '更改每一列的边框',
          define:'.ngFooterPanel {border-top: 1px solid transparent;}'
        },
        {
          name: '更改每一行的border',
          define:'.ngHeaderScroller{ border-bottom: 1px solid #253B4B;}'
        },
        {
          name: '去掉total这一行',
          define:'.ngTotalSelectContainer{display: none; }'
        },
        {
          name: '复选框的出现',
          define:"showSelectionCheckbox:'true'，但是注意不能写enableRowSelection:false,否则第一个选择框不出现"
        },
        {
          name: '更改表格的序号',
          define:'.ngTotalSelectContainer{display: none; }'
        },
        {
          name: '从后台获取的数据，根据属性选择是否选中哪一行',
          define:"checkboxCellTemplate:'<div><input type=“checkbox” ng-checked=“{{row.entity.checked}}”></div>'"
        },
        {
          name: '出现了使用ng-grid的多选showSelectionCheckbox这个属性和表格错开一列的问题？',
          define:"因为使用了data-ng-include这个指令，会创建一个dom元素，最后使表格增加一行空白列，也不能删，因为是angular的ng-grid自动生成的，所以只能找到当前的那个复选框，进行位置的位移。而且表头的多选框和表身的多选框的class命不一样，所以要相应的进行更改"
        },
      ],
    }
  },
  methods: {
    previewFn(imgurl){
      var this_ = this;
      this_.prewflag = true;
      this_.previewimg = imgurl;
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.grid_container {
  width: 100%;
  height: 100%;
  h4{
    line-height: 36px;
    font-size: 18px;
    background: blue;
    color: white;
    font-weight: bolder;
  }
}
</style>