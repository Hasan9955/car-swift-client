 
 import './IsLoading.css'
const IsLoading = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="animated-background">
                    <div className="background-masker btn-divide-left"></div>
                </div>
                <div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom"></div>
                    <div className="css-dom hidden xl:flex lg:flex"></div>
                    <div className="css-dom hidden xl:flex lg:flex"></div>
                    <div className="css-dom hidden xl:flex"></div>
                    <div className="css-dom hidden xl:flex"></div>
                </div>
            </div>
        </div>
    );
};

export default IsLoading;