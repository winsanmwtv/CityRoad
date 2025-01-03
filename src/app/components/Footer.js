import link from "next/link"

const Footer = () => {
    return (
      <footer className="bg-secondary text-white">
          <div className='max-w-7xl mx-auto px-2 py-12 sm:px-6 lg:px-8'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <h3 className="text-lg font-bold mb-4">CityRoad</h3>
              </div>
              <div className="text-sm mt-8">
                  <p>
                      Disclaimer: CityRoad is a web-app for community to update their real-time status for transportation. Some data may inaccurate.
                  </p>
                  <br/>
                  <p>
                      &copy; {new Date().getFullYear()} CityRail. All rights reserved.
                  </p>
              </div>
          </div>
      </footer>
    );
}

export default Footer;