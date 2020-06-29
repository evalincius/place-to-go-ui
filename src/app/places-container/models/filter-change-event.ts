import {FilterTypeEnum} from "./filter-type.enum";

export interface FilterChangeEvent {
  type: FilterTypeEnum;
  value: string;
  apply: boolean;
}
