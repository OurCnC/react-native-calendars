import * as React from 'react';

import { StyleProp, ViewStyle } from 'react-native';

export interface ParamDayProps {
    dateString: string,
    day: number,
    month: number,
    timestamp: number,
    year: number
}

interface CalendarProps {
    theme?: object,
    markedDates?: object,
    style?: StyleProp<ViewStyle>,
    current?: any,
    minDate?: any,
    maxDate?: any,
    firstDay?: number,
    markingType?: string,
    hideArrows?: boolean,
    displayLoadingIndicator?: boolean,
    hideExtraDays?: boolean,
    onDayPress?: (day: ParamDayProps) => any,
    onMonthChange?: Function,
    onVisibleMonthsChange?: Function,
    renderArrow?: Function,
    dayComponent?: any,
    extraDayComponent?: any,
    monthFormat?: string,
    disableMonthChange?: boolean,
    hideDayNames?: boolean,
    disabledByDefault?: boolean,
    showWeekNumbers?: boolean,
    calendarHeight?: number
}

interface CalendarListProps extends CalendarProps {
    pastScrollRange?: number,
    futureScrollRange?: number,
    scrollEnabled?: boolean,
    showScrollIndicator?: boolean,
    scrollsToTop?: boolean
}

interface AgendaProps {
    theme?: object,
    style?: StyleProp<ViewStyle>,
    items?: object,
    loadItemsForMonth?: Function,
    onCalendarToggled?: Function,
    onDayPress?: Function,
    onDaychange?: Function,
    renderItem?: Function,
    renderDay?: Function,
    renderKnob?: Function,
    renderEmptyDay?: Function,
    renderEmptyData?: Function,
    rowHasChanged?: Function,
    pastScrollRange?: number,
    futureScrollRange?: number,
    selected?: any,
    minDate?: any,
    maxDate?: any,
    markedDates?: object,
    markingType?: string,
    hideKnob?: boolean,
    monthFormat?: string
}

declare class Calendar extends React.Component<CalendarProps, any> {}

declare class CalendarList extends React.Component<CalendarListProps, any> {}

declare class Agenda extends React.Component<AgendaProps, any> {}

declare function LocaleConfig(): any;

export {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig
};
