import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";

export const P2pTranscations = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        toUserId: number
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>;
    }
    return (
        <div >
            <Center>
            <Card title="Recent Transactions" >
                <div className="pt-2 ">
                    {transactions.map(t => (
                        <div className="flex justify-between" key={t.time.getTime()}>
                            <div>
                                <div className="text-sm">
                                    Transactions INR
                                </div>
                                <div className="text-slate-600 text-xs">
                                    {t.time.toDateString()}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                + Rs {t.amount / 100}
                            </div>
                        </div>
                    ))}
                </div>
                </Card>
                </Center>
            </div>
        
    );
};
