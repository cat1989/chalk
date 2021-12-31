# chalk

## 1. 色彩

### 主色

主要品牌颜色是鲜艳、友好的蓝色。

```scss
$color-primary: #409EFF;
```

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

```scss
$color-success: #67C23A;
$color-warning: #E6A23C;
$color-danger: #F56C6C;
$color-info: #909399;
```

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

```scss
$color-text-primary: #303133;  // 主要文字
$color-text-regular: #606266;  // 常规文字
$color-text-secondary: #909399;  // 次要文字
$color-text-placeholder: #C0C4CC;  // 占位文字

$border-color-base: #DCDFE6;  // 一级边框
$border-color-light: #E4E7ED;  // 二次边框
$border-color-lighter: #EBEEF5;  // 三级边框
$border-color-extra-light: #F2F6FC;  // 四级边框

$color-white: #FFFFFF;  // 基础白色
$color-black: #000000;  // 基础黑色
$background-color-base: #F5F7FA;
```

## 2. 字体

### 字号

```
$font-size-extra-large: 20;  // 大标题
$font-size-large: 18;  // 标题
$font-size-medium: 16;  // 小标题
$font-size-base: 14;  // 正文
$font-size-small: 13;  // 正文（小）
$font-size-extra-small: 12;  // 辅助文字
```

### 行高

```scss
$font-line-height-primary: 1.5;  // 常规
$font-line-height-secondary: 1.3;  // 紧凑
```

### 字体

```css
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

## 3. 边框

### 圆角

```scss
$border-radius-base: 4;  // 大圆角
$border-radius-small: 2;  // 小圆角
$border-radius-circle: 100%;  // 圆形圆角
$border-radius-zero: 0;  // 无圆角
```

### 投影

```scss
$box-shadow-primary: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);  // 基础投影
$box-shadow-secondary: 0 2px 12px 0 rgba(0, 0, 0, 0.1);  // 浅色投影
```

