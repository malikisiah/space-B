export default function Table() {
  return (
    <div className='overflow-x-auto md:w-2/3'>
      <table className='table md:text-lg'>
        {/* head */}
        <thead>
          <tr>
            <th>Day</th>
            <th>Class</th>
            <th>Instructor</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Sunday</th>
            <td>Samba Mama</td>
            <td>Cynthia</td>
            <td>4:30 pm</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Monday</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Tuesday</th>
            <td>WOMXN VIBE</td>
            <td>Bianca</td>
            <td>7:00 pm</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>Wednesday</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>Thursday</th>
            <td>WOMXN VIBE</td>
            <td>Mallory</td>
            <td>7:00 pm</td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>Friday</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>Saturday</th>
            <td>StilettHOEs</td>
            <td>Cristina</td>
            <td>7:30 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
