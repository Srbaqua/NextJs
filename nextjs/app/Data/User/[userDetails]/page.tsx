

const UserDetails = async ({ params } : {params:Promise<{userDetails: string}>}) => {
    const {userDetails} = await params;
    return (

    <div>
        This is my dynamic Routing page {userDetails} data.
    </div>
  )
}

export default UserDetails
