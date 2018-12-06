import React, { Component } from 'react'
import { InternalizationProvider, Text } from 'react-internationalization'

const enLang = {
    common: {
        welcome: 'Hello {{ name }}, you have {{ count }} new {{ messages }}!'
    }
}

export function en() {
    return enLang
}

class Language extends Component {
    state = {
        name: 'Tudor',
        newMessages: 4
    }
    render() {
        const { name, newMessages } = this.state
        return (
            <p>
                <Text 
                    id="common.value" 
                    values={{ name, count: newMessages }} 
                    pluralize={{
                        messages: {
                            one: 'message',
                            other: 'messages',
                            dependsOn: newMessages
                        }
                    }}
                />
            </p>
        )
    }
}

const Lang = ({ languages }) => {
    <InternalizationProvider defaultLanguage="en" languages={languages} >
        <Language />
    </InternalizationProvider>
}

export default Lang;