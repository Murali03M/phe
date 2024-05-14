import { Center } from "@repo/ui/center";
import { SendCard } from "../../../components/sendCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2pTranscations } from "../../../components/p2pTransactions";




async function getP2pTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        toUserId: t.toUserId
     
    }))
}


export default  async function () {
    
    const transactions = await getP2pTransactions();

    
    return <div className="w-screen h-screen">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
       P2P Transaction
        </div>
         <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-32">
            <SendCard />
            <div className="">
            <P2pTranscations transactions={transactions} />
            </div>
       
        </div>
     
           
    </div>

}


