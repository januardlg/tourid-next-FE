export async function getPackageTourList() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/packageTour');
    return res.json();
}



