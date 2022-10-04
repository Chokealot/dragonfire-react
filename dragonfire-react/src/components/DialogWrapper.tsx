import Dialog from "@mui/material/Dialog";
import React from "react";

export default function DialogWrapper({
    children,
    open,
    maxWidth,
    fullWidth,
    onSubmit,
    classNames,
    ariaLabelledBy,
    scroll,
    horizontal,
    form,
    disableEscapeKeyDown,
    subSection,
    formClassNames,
    disableEnforceFocus,
}: {
    children: any;
    open: any;
    maxWidth: false | "sm" | "xs" | "md" | "lg" | "xl";
    fullWidth: boolean;
    onSubmit: any;
    classNames?: string,
    ariaLabelledBy: string,
    scroll?: "paper" | "body",
    horizontal?: boolean,
    form?: boolean,
    disableEscapeKeyDown?: any,
    subSection?: boolean,
    formClassNames?: string,
    disableEnforceFocus?: boolean,
}) {

    if (children !== undefined) {
        return (
            <Dialog
                aria-labelledby={ariaLabelledBy}
                open={open}
                disableEscapeKeyDown={disableEscapeKeyDown !== undefined ? true : false}
                maxWidth={maxWidth}
                fullWidth={fullWidth}
                PaperProps={{ className: classNames }}
                disableEnforceFocus={disableEnforceFocus}
                scroll={scroll !== undefined ? scroll : "body"}>
                <div className="background">
                    <div className="background-white-with-table">
                        {form !== undefined && form &&
                            <form
                                onSubmit={onSubmit}
                                autoComplete="off"
                                className={
                                    "modal-form"
                                    + (formClassNames !== undefined ? " " + formClassNames : "")
                                }
                                noValidate>
                                <div
                                    className={
                                        children !== undefined
                                        && children.length === undefined
                                        && children.props !== undefined
                                        && children.props.children[0].key === "LeftSideWrapper"
                                            ? "form-general-wrapper"
                                            : children !== undefined
                                            && children.length !== undefined
                                            && children[0].key === "LeftSideWrapper"
                                                ? "form-general-wrapper"
                                                : ""
                                    }
                                    style={{ border: "none" }}>
                                    {children[0]}
                                    {children[1]}
                                </div>
                                {subSection &&
                                    children[2]
                                }
                            </form>
                        }
                        {((form !== undefined && !form) || form === undefined) &&
                            <div
                                className="modal-form">
                                <div
                                    className={
                                        children !== undefined
                                        && children.length === undefined
                                        && children.props !== undefined
                                        && children.props.children !== undefined
                                        && children.props.children[0].key === "LeftSideWrapper"
                                            ? "form-general-wrapper"
                                            : children !== undefined
                                            && children.length !== undefined
                                            && children[0].key === "LeftSideWrapper"
                                                ? "form-general-wrapper"
                                                : ""
                                    }
                                    style={{ border: "none" }}>
                                    {children}
                                </div>
                                {subSection &&
                                    children[2]
                                }
                            </div>
                        }
                    </div>
                </div>
            </Dialog>
        );
    } else {
        return null;
    }
}
