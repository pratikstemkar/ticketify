import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TicketList from "./TicketList";

const ProfileTabs = () => {
    return (
        <Tabs
            defaultValue="ticket"
            className="w-full lg:w-3/4"
        >
            <TabsList className="w-full">
                <TabsTrigger
                    value="ticket"
                    className="w-full"
                >
                    Active Tickets
                </TabsTrigger>
                <TabsTrigger
                    value="order"
                    className="w-full"
                >
                    My Orders
                </TabsTrigger>
            </TabsList>
            <TabsContent value="ticket">
                <TicketList />
            </TabsContent>
            <TabsContent value="order">
                <div>Hello World!</div>
            </TabsContent>
        </Tabs>
    );
};

export default ProfileTabs;
