import { ButtonConfig } from '@components/button/button.types';
import { TableConfig, TableId } from '@components/table/table.types';

export interface IPageLayout {
  showToolbar: boolean;
  showTabs: boolean;
  showTable: boolean;
}

export interface IPageAction {
  key: string;
  buttonConfig: ButtonConfig;
}

export interface IDataPageConfig<T extends { id: TableId }> {
  layout: IPageLayout;
  headerButtons?: IPageAction[];
  tabs?: IPageAction[];
  table: TableConfig<T>;
}
