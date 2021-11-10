import React from "react";

type ProjectButtonProps = {
    text: string
    type?: string
    link?: string
}
export const ProjectButton = ({text, type,link}: ProjectButtonProps) => {
    return (
        <a href={link} type={type} className={'projectLink'}>{text}</a>
    )
}