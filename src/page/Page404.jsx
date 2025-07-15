import React from 'react'
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Page404 = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <div>
      <Table>
        <tbody>
          {product.info.map((section, index) => (
            <tr key={index}>
              <td>{section.name}</td>
              <td>
                {section.info.map((point, i) => (
                  <p key={i}>» {point}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Page404
