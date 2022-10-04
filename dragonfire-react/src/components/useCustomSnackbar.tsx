import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useSnackbar, OptionsObject } from "notistack";

/** A **custom hook** for displaying a snackbar message in bottom left corner of the screen.
 * 
 * Default **duration** is **5000ms**.
 * This can be altered by passing ***autoHideDuration*** prop in the options object.
 */
export const useCustomSnackbar = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = React.useCallback((key: any) => (
        <IconButton onClick={() => { closeSnackbar(key) }} aria-label="Lukk" color="inherit" size="small">
            <CloseIcon fontSize="small" />
        </IconButton>
    ),[closeSnackbar]);

    /**
     * Add a notification message to the queue of snackbars. Only tree messages can be displayed at the same time.
     * @param message The ***message*** you want to display in the snackbar
     * @param options Options object for the snackbar. See [Notistack documentation](https://iamhosseindhv.com/notistack/api#mutual) for more info.
     */
    const pushSnackbar = (
        message: string | string[],
        // extend the default options object
        options?: OptionsObject &
            Partial<{ variant: "success" | "error" | "warning" | "info" }>
    ) => {
        if (typeof message === "string") {
            enqueueSnackbar(message, {
                ...options,
                action,
            });
        } else {
            // If a string array is passed, then we just convert the array to a string with spaces between each element
            enqueueSnackbar(message.join(" "), {
                ...options,
                action,
            });
        }
    };

    return pushSnackbar;
};

export default useCustomSnackbar;
