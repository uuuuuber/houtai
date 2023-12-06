export interface IAdminDataType {
  key: React.Key;
  username: string;
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_time: string;
}
export interface IAdminStore {
  adminList: IAdminDataType[];
  setAdminDataList(v: IAdminDataType[]): void;
}
