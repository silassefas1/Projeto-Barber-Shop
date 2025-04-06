import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.service";
import { ISnackbarManagerService } from "./isnackbar-manager.service";
import { IDialogManagerService } from "./idialog-manager.service";
import { IScheduleService } from "./api-client/schedules/ischedules.service";

export const SERVICES_TOKEN = {
  HTTP: {
    CLIENT: new InjectionToken<IClientService>('SERVICE_TOKEN.HTTP.CLIENT'),
    SCHEDULE: new InjectionToken<IScheduleService>('SERVICE_TOKEN.HTTP.SCHEDULE')
  },
  SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICE_TOKEN.SNACKBAR'),
  DIALOG: new InjectionToken<IDialogManagerService>('SERICES_TOKEN.DIALOG')
}
