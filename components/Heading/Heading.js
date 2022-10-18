import {getFontSizeForHeading} from "utils/font"
import React from "react"
export const Heading = ({allContent}) => {
    return (
        <div dangerouslySetInnerHTML={{__html:allContent}}></div>
    )
    // const tag = React.createElement(`h${level}`, {
    //     dangerouslySetInnerHTML: {__html:content},
    //     style:{backgroundColor: `${bg}`}
    // })
    // return tag
}