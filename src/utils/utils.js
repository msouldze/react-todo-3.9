import { formatDistanceToNow } from "date-fns";

function dateFormatter(time) {
    const result = formatDistanceToNow(
        time,
        {includeSeconds: true}
    )
    return result;
}

export default dateFormatter;