import { Action } from "@ngrx/store";

export enum CoreActionTypes {
	AppLoading = "[App] App Loading",
}

export namespace CoreActions {
	export class AppLoading implements Action {
		readonly type = CoreActionTypes.AppLoading;
	}
}

export type CoreAction = CoreActions.AppLoading;
