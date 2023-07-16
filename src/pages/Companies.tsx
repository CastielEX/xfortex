import { useEffect, useState } from "react";

type Driver = {
  id: number;
  name: string;
  license: boolean;
};

type Company = {
  id: number;
  title: string;
  content: string;
  drivers: Driver[];
};

function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchCompanyName, setCompanyName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/companies/");
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredCompanies = companies.filter((company: any) => {
    return company.title.toLowerCase().includes(searchCompanyName.toLowerCase())
  })

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form data using the event object: e.target.<inputName>.value
    // Example: const name = e.target.name.value;
    // After handling the submission, you can close the popup using handleClose()
  };

  return (
    <section className="companies-section">
      <div className="companies-create-btn-section">
        <button className="create-company-btn" onClick={handleOpen}>CREATE</button>
        {isOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              {/* Your form fields go here */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              {/* Add more form fields as needed */}

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
        </div>
      <div className="companies">
        <input
          className="companies-search"
          type="text"
          placeholder="Browse Companies..."
          value={searchCompanyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
      </div>
      {companies.length > 0 ? (
        filteredCompanies.map((company) => (
           <div className="companies-list" key={company.id}>
           <button className="companies-list-btn">
             {company.title}
             <h3>Drivers : 43</h3>
             <h3>Status : Active</h3>
           </button>
         </div>
        ))
        ) : (
          <div>Loading...</div>
      )}
    </section>
  );
}

export default Companies;
