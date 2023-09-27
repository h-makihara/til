# Lighthouse 10 についてのみまとめる

Lighthouse 10 からハッシュルーティングに対応され、FinalDisplayedUrl が実装された。  
世の流れは SPA から MPA の空気もあるが、旧バージョン（Lighthouse 8）は考慮（記載）せず、Lighthouse 10 のみを記載する。

# Performance

- [パフォーマンスの評価基準](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/#lighthouse-10)

評価項目と重み付け(2023/09/28 時点)
|audit|weight|
| - | - |
| [First Contentful Paint(FCP)](https://web.dev/fcp/) | 10% |
| [Speed Index](https://developer.chrome.com/en/docs/lighthouse/performance/speed-index/) | 10% |
| [Largest Contentful Paint(LCP)](https://web.dev/lcp/) | 25% |
| [Total Blocking Time(TBT)](https://web.dev/tbt/) | 30% |
| [Cumulative Layout Shift(CLS)](https://web.dev/cls/) | 25% |

# Accessibility

- [Accesibility の評価基準](https://developer.chrome.com/docs/lighthouse/accessibility/scoring/)

| Audit                                                                                                                        | Weight |
| ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| [accesskey] values are unique                                                                                                | 7      |
| [aria-*] attributes match their roles                                                                                        | 10     |
| Values assigned to role="" are valid ARIA roles                                                                              | 1      |
| button, link, and menuitem elements have accessible names                                                                    | 7      |
| Elements with role="dialog" or role="alertdialog" have accessible names                                                      | 7      |
| [aria-hidden="true"] is not present on the document <body>                                                                   | 10     |
| [aria-hidden="true"] elements do not contain focusable descendents                                                           | 7      |
| ARIA input fields have accessible names                                                                                      | 7      |
| ARIA meter elements have accessible names                                                                                    | 7      |
| ARIA progressbar elements have accessible names                                                                              | 7      |
| [role]s have all required [aria-*] attributes                                                                                | 10     |
| Elements with an ARIA [role] that require children to contain a specific [role] have all required children                   | 10     |
| [role]s are contained by their required parent element                                                                       | 10     |
| [role] values are valid                                                                                                      | 7      |
| Elements with the role=text attribute do not have focusable descendents                                                      | 7      |
| ARIA toggle fields have accessible names                                                                                     | 7      |
| ARIA tooltip elements have accessible names                                                                                  | 7      |
| ARIA treeitem elements have accessible names                                                                                 | 7      |
| [aria-*] attributes have valid values                                                                                        | 10     |
| [aria-*] attributes are valid and not misspelled                                                                             | 10     |
| Buttons have an accessible name                                                                                              | 10     |
| The page contains a heading, skip link, or landmark region                                                                   | 7      |
| Background and foreground colors have a sufficient contrast ratio                                                            | 7      |
| \<dl\>'s contain only properly-ordered \<dt> and \<dd> groups, \<script>, \<template> or \<div> elements                     | 7      |
| Definition list items are wrapped in \<dl> elements                                                                          | 7      |
| Document has a \<title> element                                                                                              | 7      |
| [id] attributes on active, focusable elements are unique                                                                     | 7      |
| ARIA IDs are unique                                                                                                          | 10     |
| No form fields have multiple labels                                                                                          | 3      |
| \<frame> or \<iframe> elements have a title                                                                                  | 7      |
| Heading elements appear in a sequentially-descending order                                                                   | 3      |
| \<html> element has a [lang] attribute                                                                                       | 7      |
| \<html> element has a valid value for its [lang] attribute                                                                   | 7      |
| \<html> element has an [xml:lang] attribute with the same base languge as the [lang] attribute                               | 3      |
| Image elements have [alt] attributes                                                                                         | 10     |
| Image elements do not have [alt] attributes that are redundant text                                                          | 1      |
| Input buttons have discernible text                                                                                          | 10     |
| \<input type="image"> elements have [alt] text                                                                               | 10     |
| Elements with visible text labels have matching accessible names                                                             | 7      |
| Form elements have associated labels                                                                                         | 7      |
| Links are distinguishable without relying on color                                                                           | 7      |
| Links have a discernible name                                                                                                | 7      |
| Lists contain only \<li> elements and script supporting elements (\<script> and \<template>)                                 | 7      |
| List items (\<li>) are contained within \<ul>, \<ol> or \<menu> parent elements                                              | 7      |
| The document does not use \<meta http-equiv="refresh">                                                                       | 10     |
| [user-scalable="no"] is not used in the \<meta name="viewport"> element and the [maximum-scale] attribute is not less than 5 | 10     |
| \<object> elements have alternate text                                                                                       | 7      |
| Select elements have associated label elements                                                                               | 7      |
| Skip links are focusable                                                                                                     | 3      |
| No element has a [tabindex] value greater than 0                                                                             | 7      |
| Tables have different content in the summary attribute and \<caption>                                                        | 1      |
| Tables use \<caption> instead of cells with the [colspan] attribute to indicate a caption                                    | 7      |
| \<td> elements in a large \<table> have one or more table headers                                                            | 10     |
| Cells in a \<table> element that use the [headers] attribute refer to table cells within the same table                      | 7      |
| \<th> elements and elements with [role="columnheader"/"rowheader"] have data cells they describe                             | 7      |
| [lang] attributes have a valid value                                                                                         | 7      |
| \<video> elements contain a \<track> element with [kind="captions"]                                                          | 10     |
