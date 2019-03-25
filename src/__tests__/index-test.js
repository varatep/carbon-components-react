/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Carbon from '../index';

describe('Carbon Components React', () => {
  it('can be imported using the correct path', () => {
    expect(typeof Carbon).toBe('object');
  });

  it('should export components', () => {
    expect(Object.keys(Carbon).sort()).toMatchInlineSnapshot(`
Array [
  "Accordion",
  "AccordionItem",
  "AccordionSkeleton",
  "Breadcrumb",
  "BreadcrumbItem",
  "BreadcrumbSkeleton",
  "Button",
  "ButtonSkeleton",
  "Checkbox",
  "CheckboxSkeleton",
  "ClickableTile",
  "CodeSnippet",
  "CodeSnippetSkeleton",
  "ComboBox",
  "ComposedModal",
  "ContentSwitcher",
  "Copy",
  "CopyButton",
  "DangerButton",
  "DataTable",
  "DataTableSkeleton",
  "DatePicker",
  "DatePickerInput",
  "DatePickerSkeleton",
  "Dropdown",
  "DropdownItem",
  "DropdownSkeleton",
  "DropdownV2",
  "ExpandableTile",
  "FileUploader",
  "FileUploaderButton",
  "FileUploaderSkeleton",
  "Filename",
  "Footer",
  "Form",
  "FormGroup",
  "FormItem",
  "FormLabel",
  "Icon",
  "IconSkeleton",
  "InlineLoading",
  "InlineNotification",
  "Link",
  "ListItem",
  "Loading",
  "Modal",
  "ModalBody",
  "ModalFooter",
  "ModalHeader",
  "ModalWrapper",
  "MultiSelect",
  "Notification",
  "NotificationButton",
  "NotificationTextDetails",
  "NumberInput",
  "NumberInputSkeleton",
  "OrderedList",
  "OverflowMenu",
  "OverflowMenuItem",
  "Pagination",
  "PaginationV2",
  "PrimaryButton",
  "ProgressIndicator",
  "ProgressIndicatorSkeleton",
  "ProgressStep",
  "RadioButton",
  "RadioButtonGroup",
  "RadioButtonSkeleton",
  "RadioTile",
  "Search",
  "SearchFilterButton",
  "SearchLayoutButton",
  "SearchSkeleton",
  "SecondaryButton",
  "Select",
  "SelectItem",
  "SelectItemGroup",
  "SelectSkeleton",
  "SelectableTile",
  "SkeletonPlaceholder",
  "SkeletonText",
  "Slider",
  "SliderSkeleton",
  "StructuredListBody",
  "StructuredListCell",
  "StructuredListHead",
  "StructuredListInput",
  "StructuredListRow",
  "StructuredListSkeleton",
  "StructuredListWrapper",
  "Switch",
  "Tab",
  "TabContent",
  "Table",
  "TableBody",
  "TableData",
  "TableHead",
  "TableHeader",
  "TableRow",
  "TableRowExpanded",
  "Tabs",
  "TabsSkeleton",
  "Tag",
  "TagSkeleton",
  "TextArea",
  "TextAreaSkeleton",
  "TextInput",
  "TextInputSkeleton",
  "Tile",
  "TileAboveTheFoldContent",
  "TileBelowTheFoldContent",
  "TileGroup",
  "TimePicker",
  "TimePickerSelect",
  "ToastNotification",
  "Toggle",
  "ToggleSkeleton",
  "ToggleSmall",
  "ToggleSmallSkeleton",
  "Toolbar",
  "ToolbarDivider",
  "ToolbarItem",
  "ToolbarOption",
  "ToolbarSearch",
  "ToolbarTitle",
  "Tooltip",
  "TooltipDefinition",
  "TooltipIcon",
  "TooltipSimple",
  "UnorderedList",
]
`);
  });
});
