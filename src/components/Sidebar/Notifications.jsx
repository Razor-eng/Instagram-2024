import { Box, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { NotificationsLogo, NotificationsLogoDark } from "../../assets/constants";

const Notifications = () => {
	const { colorMode } = useColorMode();

	return (
		<Tooltip
			hasArrow
			label={"Notifications"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Flex
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				_light={{
					_hover: {
						bg: "gray.300"
					}
				}}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				{colorMode === "dark" ? <NotificationsLogo /> : <NotificationsLogoDark />}
				<Box display={{ base: "none", md: "block" }}>Notifications</Box>
			</Flex>
		</Tooltip>
	);
};

export default Notifications;
