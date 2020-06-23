import {FilterTypeEnum} from "./filter-type.enum";

export interface Filter {
  type: FilterTypeEnum;
  value: string;
}
