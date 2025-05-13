import { useUnit } from "effector-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/hooks/useLang";
import { IAddressesListProps, IPickUpPointAddressData } from "@/types/order";
import { $chosenPickupAddressData, $pickUpPointDataByCity, $shouldLoadPickUpPointData } from "@/context/order/state";
import { useTTMap } from "@/hooks/useTTMap";
import { getPickUpPointByCityFx, setChosenPickupAddressData, setShouldLoadPickUpPointData } from "@/context/order";
import PickUpAddressItem from "./PickUpAddressItem";
import styles from '@/styles/order/index.module.scss'

const AddressesList = ({
    listClassName,
    handleSelectAddressByMarkers,
}: IAddressesListProps) => {
    const { lang, translations } = useLang()
    const pickUpPointDataByCity = useUnit($pickUpPointDataByCity)
    const chosenPickupAddressData = useUnit($chosenPickupAddressData)
    const shouldLoadPickUpPointData = useUnit($shouldLoadPickUpPointData)
    const { handleSelectAddress } = useTTMap()
    const loadPickUpPointDataSpinner = useUnit(
        getPickUpPointByCityFx.pending
    )

    const handleChosenAddressData = (data: Partial<IPickUpPointAddressData>) => {
        setShouldLoadPickUpPointData(false)
        setChosenPickupAddressData(data)
        //setShouldShowCourierAddressData(false)
    }

    return (
        <>
            {shouldLoadPickUpPointData && (
                <>
                     {loadPickUpPointDataSpinner && (
                        <span
                         className={styles.order__list__item__delivery__inner__spinner}
                        >
                            <FontAwesomeIcon icon={faSpinner} spin color='#fff' size='2x' />
                        </span>
                    )}
                    {!loadPickUpPointDataSpinner && (
                        <ul className={`list-reset ${listClassName}`}>
                            {pickUpPointDataByCity?.length ? (
                                pickUpPointDataByCity.map((item) => (
                                    <PickUpAddressItem
                                        key={item.place_id}
                                        addressItem={item}
                                        handleChosenAddressData={handleChosenAddressData}
                                        handleSelectAddress={
                                        handleSelectAddressByMarkers || handleSelectAddress
                                        }
                                    />
                                ))
                            ) : (
                                <span>{translations[lang].common.nothing_is_found}</span>
                            )}
                        </ul>
                    )}
                </>
            )}
            {!!chosenPickupAddressData.address_line1 && !shouldLoadPickUpPointData && (
                <div className={styles.order__list__item__delivery__pickup__choose}>
                    <span>{chosenPickupAddressData.address_line1}</span>
                    <span>
                        {chosenPickupAddressData.address_line2},{' '}
                        {chosenPickupAddressData.city}
                    </span>
                </div>
            )}
        </>
    )
}

export default AddressesList