/* eslint-disable react-refresh/only-export-components */
import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("zinc.100", "zinc.900")(props),
                color: mode("zinc.800", "whiteAlpha.900")(props),
            }
        })
    }
}

export default extendTheme(theme)