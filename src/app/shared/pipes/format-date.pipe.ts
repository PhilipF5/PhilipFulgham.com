import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({ name: "formatDate" })
export class FormatDatePipe implements PipeTransform {
	transform(input: string, format: string) {
		return DateTime.fromISO(input).toFormat(format);
	}
}
