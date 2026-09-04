import ReusableBanner from '@/app/Components/ReusableBanner'
import shopPageBanner from "../../public/images/Shop-page-images/Rectangle 1(1).png"


export default function page() {
    return (
        <div>

            <ReusableBanner title={"CART"} image={shopPageBanner} />

        </div>
    )
}
