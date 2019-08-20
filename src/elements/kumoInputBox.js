import React from 'react'
import { withMedia } from 'react-media-query-hoc';

const KumoInputBox = props => {
    const { type, value, style, onChange, placeholder, className, noMinWidth } = props
    const defaultStyle = {
        border: '#01ACAF',
        boxShadow: '5px 5px 15px rgba(255, 0, 0, 0.3)', cursor: 'pointer',
            }
    const userstyle = style === undefined ? {} : style
    return (
        <div style={{ minWidth: noMinWidth ? null : 200 }}>
            <input
                className={`form-control ${className} p-3 py-4 `}
                type={type}
                value={value}
                style={{ ...userstyle, ...defaultStyle }}
                onChange={onChange}
                placeholder={placeholder}
                minWidth={noMinWidth === undefined ? null : 200}>
            </input>
        </div>

    )
}
export default withMedia(KumoInputBox);