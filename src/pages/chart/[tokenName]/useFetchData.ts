import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  useGetTokenVolumeRankQuery,
  useGetTokenPriceRankQuery,
} from '../../../redux/api/token/chart/chartSlice'
import { currentRadioOption } from '../../../redux/controlPanel/radioOption/radioOptionSlice'
import { currentUnit } from '../../../redux/controlPanel/unit/unitSlice'
import { currentDatetime } from '../../../redux/controlPanel/datetime/datetimeSlice'

export default function useFetchData() {
  const { market } = useParams()
  const radioOption = useSelector(currentRadioOption)
  const unit = useSelector(currentUnit)
  const datetime = useSelector(currentDatetime)

  const [volumeSkip, setVolumeSkip] = useState<boolean>(radioOption === 'PRICE')
  const [priceSkip, setPriceSkip] = useState<boolean>(radioOption === 'VOLUME')

  useEffect(() => {
    if (radioOption === 'PRICE') {
      setVolumeSkip(true)
      setPriceSkip(false)
    } else {
      setVolumeSkip(false)
      setPriceSkip(true)
    }
  }, [radioOption])

  const {
    data: tokenVolumeData,
    isLoading: isTokenVolumeDataLoading,
    isSuccess: isTokenVolumeDataSuccess,
  } = useGetTokenVolumeRankQuery(
    { market: market as string, unit: unit.value, datetime },
    { skip: volumeSkip }
  )
  const {
    data: tokenPriceData,
    isLoading: isTokenPriceDataLoading,
    isSuccess: isTokenPriceDataSuccess,
  } = useGetTokenPriceRankQuery(
    { market: market as string, unit: unit.value, datetime },
    { skip: priceSkip }
  )

  return {
    volumeData: tokenVolumeData?.payload,
    priceData: tokenPriceData?.payload,
    volumeDataLoading: isTokenVolumeDataLoading,
    priceDataLoading: isTokenPriceDataLoading,
    volumeDataSuccess: isTokenVolumeDataSuccess,
    priceDataSuccess: isTokenPriceDataSuccess,
  }
}
