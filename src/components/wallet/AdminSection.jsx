import { ownerAddress1, ownerAddress2 } from "@/utils/constants";
import { useAddress } from "@thirdweb-dev/react";
import { ERC20Button } from "../web3Buttons/ERC20-Button";
import { TeamVestingButton } from "../web3Buttons/TeamVestingButton";
import { useState } from "react";
import { addressARGA, addressTeamArga } from "@/utils/constants";
import Alerta from "../ui/Alerta/Alerta";

export default function AdminSection() {

    const address = useAddress()
    const [tokenAmount, setTokenAmount] = useState(1)
    const [teamMembers, setTeamMembers] = useState('')
    const [teamMembersArray, setTeamMembersArray] = useState('')
    const [approvalSuccess, setApprovalSuccess] = useState(false)

    const handleMembersChange = (e) => {
        const input = e.target.value
        setTeamMembers(input)

        const membersArray = input.split(',').map(member => member.trim())
        setTeamMembersArray(membersArray)
    }

    const handleApprovalSuccess = () => {
        setApprovalSuccess(true);
        Alerta({
            title: 'Todo listo',
            text: `Aprobaste el uso de ARGA correctamente. Ya puedes continuar`,
            img: Error,
        });
    };

    const handleApprovalError = (error) => {
        setApprovalSuccess(false);
        Alerta({
            title: 'Ups..',
            text: error.reason,
            img: Error,
        });
    };

    const handlePurchaseSuccess = () => {
        setApprovalSuccess(false);
        Alerta({
            title: 'Completado',
            text: `Vesting establecido con éxito.`,
            img: Error,
        });
    };

    const handlePurchaseError = (error) => {
        if (error.reason === "ERC20: transfer amount exceeds balance") {
            setApprovalSuccess(false);
            Alerta({
                title: 'Ups..',
                text: 'No tienes suficiente saldo.',
                img: Error,
            });
        } else {
            setApprovalSuccess(false);
            Alerta({
                title: 'Ups..',
                text: error.reason,
                img: Error,
            });
        }
    };

    return (
        <section className="w-full flex justify-center p-12">
            {address === ownerAddress1 || address === ownerAddress2 && (
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <span className="font-bold text-xl bg-black px-5 py-3 rounded-lg">
                        Hola admin, a quiénes haremos millonarios hoy ?
                    </span>

                    <span className="font-bold text-lg">
                        Cantidad total de tokens:
                    </span>

                    <input
                        type="number"
                        className="text-black px-3 py-1 rounded-lg font-bold"
                        value={tokenAmount}
                        onChange={(e) => {
                            setTokenAmount(e.target.value)
                        }}
                    />

                    <span className="font-bold text-lg">
                        Miembros de equipo:
                    </span>

                    <input
                        type="text"
                        className="w-full text-black px-3 py-1 rounded-lg font-bold"
                        value={teamMembers}
                        onChange={handleMembersChange}
                    />

                    {!approvalSuccess ? (
                        <ERC20Button
                            type={'approve'}
                            tokenAddress={addressARGA}
                            tokenName={'ARGA'}
                            amount={tokenAmount.toString()}
                            spender={addressTeamArga}
                            onSuccessFunction={() => handleApprovalSuccess()}
                            onErrorFunction={(error) => handleApprovalError(error)}
                        />
                    ) : (
                        <TeamVestingButton
                            type={'allocateTokens'}
                            className="text-black"
                            tokenAmount={tokenAmount.toString()}
                            teamMembers={teamMembersArray}
                            onSuccessFunction={() => handlePurchaseSuccess()}
                            onErrorFunction={(error) => handlePurchaseError(error)}
                        />
                    )}

                    <span className="text-yellow-500">
                        {teamMembersArray.length === 1 && (
                            `1 dirección recibirá ${tokenAmount} tokens`
                        )}
                        {teamMembersArray.length > 1 && (
                            `${teamMembersArray.length} direcciones recibirán ${tokenAmount / teamMembersArray.length} tokens cada una`
                        )}
                    </span>

                    <span className="font-bold text-red-500">
                        Ingresar direcciones de miembros de equipo separadas por coma
                    </span>

                    <span className="font-bold text-blue-500">
                        Ejemplo: 0x61D4d1Ab7eA7B3A54C7B2D646Eb8189faD7B1050, 0xDA81E62c2C428bDde5D3271014DbE0cfd3cfeC26, 0x792950dB951525c36526383Ce9200e9E540F1a68
                    </span>

                    <span className="font-bold">
                        - La cantidad total de tokens ingresada será dividida por la cantidad de direcciones
                    </span>

                    <span className="font-bold">
                        - Ejemplo 1: Se ingresa 100 tokens y una dirección. Una dirección recibirá 100 tokens de vesting
                    </span>

                    <span className="font-bold">
                        - Ejemplo 2: Se ingresa 1000 tokens y dos direcciones. Cada uno recibirá 500
                    </span>

                    <span className="font-bold">
                        - Si se necesitan asignar diferentes cantidades de tokens a distintas direcciones se puede hacer en varias llamadas sin problema
                    </span>

                    <span className="font-bold">
                        - Ante cualquier problema comunicarse con damkan dev
                    </span>

                </div>
            )}
        </section>
    );
}
