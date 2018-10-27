import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({ name: "momentString" })
export class MomentStringPipe implements PipeTransform {
	transform(input: string, format: string) {
		return moment(input).format(format);
	}
}
