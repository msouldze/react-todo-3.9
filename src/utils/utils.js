import { formatDistanceToNow } from "date-fns";

function dateFormatter(time) {
    const date = time || new Date(2024, 4, 0, 13, 48, 15);
    const result = formatDistanceToNow(
        date,
        {includeSeconds: true}
    )
    return result;
}

export default dateFormatter;