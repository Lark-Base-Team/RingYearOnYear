import './index.scss'
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Toast } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, FieldType } from "@lark-base-open/js-sdk";
import type { ICategory } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { ICustomConfig, IRenderData, ITableItem } from '@/common/type';
import { useConfig } from '@/hooks';
import { defaultConfig } from '@/common/constant';
import { configFormatter, dataConditionFormatter, getConfig, getPreviewData, renderMainContentData } from '@/utils';
import { debounce } from 'lodash-es';

interface IProps {
  setRenderData: (data: IRenderData) => void;
}
export default function MainConfigPanel({ setRenderData }: IProps) {
  const { t } = useTranslation();
  const tabList = [
    {
      key: '1',
      tab: t('type_Date'),
    },
    {
      key: '2',
      tab: t('customStyle'),
    }
  ];

  // create时的默认配置
  const [config, setConfig] = useState<ICustomConfig>(defaultConfig);

  useConfig(setConfig);

  /**保存配置 */
  const onSaveConfig = () => {
    if (!config.dateTypeFieldId) {
      Toast.error(t('dataPlaceholder'));
      return;
    }
    // 目前只持存保存一份查询配置
    const myDataCondition = configFormatter(config)[0];
    dashboard.saveConfig({
      customConfig: config,
      dataConditions: myDataCondition,
    } as any);
  }

  const [tableList, setTableList] = useState<ITableItem[]>([]);
  const [dateTypeList, setDateTypeList] = useState<ICategory[]>([]);
  const [numberOrCurrencyList, setNumberOrCurrencyList] = useState<ICategory[]>([]);

  const getTableList = useCallback(async () => {
    const baseTableList = await base.getTableList();
    const resultList: ITableItem[] = [];

    for (const item of baseTableList) {
      const name = await item.getName();
      resultList.push({ value: item.id, label: name });
    }

    return resultList;
  }, []);

  const getCategories = useCallback(async (tableId: string) => {
    const categories = await dashboard.getCategories(tableId);
    const FieldTypes = [FieldType.DateTime, FieldType.CreatedTime, FieldType.ModifiedTime];
    const dateTypeList = categories.filter(item => FieldTypes.includes(item.fieldType)) || [];
    const numberOrCurrencyTypes = [FieldType.Number, FieldType.Currency];
    const numberOrCurrencyList = categories.filter(item => numberOrCurrencyTypes.includes(item.fieldType)) || [];
    return {
      dateTypeList,
      numberOrCurrencyList,
    };
  }, []);

  /**
   * 当tableID变化后，需要根据config的配置重新设置所有依赖数据
  */
  const setData = async (customConfig: ICustomConfig, tableIdChange: boolean = true) => {
    const { dateTypeList, numberOrCurrencyList } = await getCategories(customConfig.tableId);
    setDateTypeList(dateTypeList);
    setNumberOrCurrencyList(numberOrCurrencyList);
    if (tableIdChange) {
      customConfig.dateTypeFieldId = dateTypeList[0].fieldId || '';
      const isChange = numberOrCurrencyList.length > 0;
      customConfig.statisticalType = isChange ? 'number' : 'total';
      isChange && (customConfig.numberOrCurrencyFieldId = numberOrCurrencyList[0].fieldId);
    }
    setConfig({ ...customConfig });
  }

  const initData = async () => {
    const tableList = await getTableList();
    setTableList(tableList);
    if (dashboard.state === DashboardState.Create) {
      // 创建状态，无任务配置
      const customConfig = { ...config };
      customConfig.tableId = tableList[0]?.value;
      setData(customConfig);
    } else {
      // config 初始化获取配置
      const { dataCondition, customConfig } = await getConfig();
      const newCustomConfig = dataConditionFormatter(dataCondition, customConfig);
      setData(newCustomConfig, false);
    }
  }

  useEffect(() => {
    initData();
  }, [getTableList, getCategories]);

  // 用于临时存储SDK接口返回的指标数据
  const [valueArr, setValueArr] = useState<number[]>([]);

  const renderMainDataDebounce = debounce(async () => {
    if (!config.tableId) {
      return
    }
    const value = await getPreviewData(config);
    setValueArr(value);
    await renderMainContentData(config, value, setRenderData);
  }, 200);

  // 类型与数据面板变化，依赖base SDK接口的数据计算，重新获取指标数据
  useEffect(() => {
    renderMainDataDebounce();
  }, [config.tableId, config.dateTypeFieldId, config.dateTypeFieldType, config.dateRange, config.statisticalType, config.numberOrCurrencyFieldId, config.statisticalCalcType, JSON.stringify(config.momOrYoy)]);


  const renderMainStyleDebounce = debounce(() => {
    if (!config.tableId) {
      return
    }
    renderMainContentData(config, valueArr, setRenderData).then();
  }, 200);
  // 自定义样式面板变化，重新设置主面板的显示样式与格式
  useEffect(() => {
    renderMainStyleDebounce();
  }, [config.color, config.iconStyleId, config.decimal, config.numberFormat, config.prefix, config.suffix]);

  return (
    <div className='main-config-panel left-border'>
      <div className='form'>
        <Tabs defaultActiveKey='1'>
          {tabList.map((item) => (
            <TabPane tab={item.tab} itemKey={item.key} key={item.key}>
              {item.key === '1' && (
                <PanelTypeAndData
                  config={config}
                  setConfig={setConfig}
                  tableList={tableList}
                  dateTypeList={dateTypeList}
                  numberOrCurrencyList={numberOrCurrencyList}
                  setData={setData}
                />
              )}
              {item.key === '2' && <PanelCustomStyle config={config} setConfig={setConfig} />}
            </TabPane>
          ))}
        </Tabs>
      </div>

      <Button className='btn' theme='solid' onClick={onSaveConfig}>
        {t('confirm')}
      </Button>
    </div >
  )
}
