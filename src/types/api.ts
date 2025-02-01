/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from "axios";

export interface getAPIProps {
  url: string;
  config?: AxiosRequestConfig<unknown>;
}

export interface postAPIProps {
  url: string;
  body: any;
  config?: AxiosRequestConfig<unknown>;
}
