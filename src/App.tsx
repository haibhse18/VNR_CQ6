import './App.css'
import b52BiBanHa from './image/b52bibanha.jpg'
import cachMangCaNuoc from './image/cach mang ca nuoc.jpg'
import dienBienPhuTrenKhong from './image/dienbienphutrenkhong.jpg'
import haiMienVietNam from './image/2 mien vietnam.png'
import hiepDinhParis from './image/hiepdinhparis.jpg'
import keHoachVietNamHoa from './image/kehoachvietnamhoachientranh.jpg'
import chienTranhDacBiet from './image/chien tranh dac biet.jpg'
import daiThangMuaXuan1975 from './image/dait thang mua xuan 1975.jpg'
import dienBienPhuTrenKhong2 from './image/dienbienphutrenkhong2.jpg'
import mauThan1968 from './image/mauthan1968.jpg'
import phongTraoDongKhoi from './image/Phong_trào_Đồng_khởi.png'

const phaseOneResults = [
  '1954 - 1965: chuyển thế chiến lược, từ Đồng Khởi đến đánh bại “Chiến tranh đặc biệt”.',
  '1965 - 1968: chống “Chiến tranh cục bộ”, đỉnh cao là Tổng tiến công và nổi dậy Tết Mậu Thân 1968.',
  '1969 - 1975: chống “Việt Nam hóa chiến tranh”, tạo bước ngoặt Điện Biên Phủ trên không 1972 và Đại thắng Mùa Xuân 1975.',
]

const phaseTwoProcess = [
  'Đánh bại “Chiến tranh cục bộ” bằng thế trận chiến tranh nhân dân và đòn tâm lý Mậu Thân 1968.',
  'Bắn rơi B-52 trong 12 ngày đêm 1972, buộc Mỹ ký Hiệp định Paris.',
  'Tổ chức ba chiến dịch quyết định năm 1975: Tây Nguyên, Huế - Đà Nẵng, Hồ Chí Minh.',
]

const meanings = [
  'Kết thúc thắng lợi 21 năm kháng chiến chống Mỹ, thống nhất đất nước.',
  'Mở ra kỷ nguyên hòa bình, độc lập, thống nhất và đi lên chủ nghĩa xã hội.',
  'Làm thất bại âm mưu xâm lược kiểu mới của đế quốc Mỹ, cổ vũ phong trào giải phóng dân tộc.',
  'Khẳng định bản lĩnh, trí tuệ và sức mạnh đoàn kết của dân tộc Việt Nam.',
]

const lessons = [
  'Giữ vững mục tiêu độc lập dân tộc gắn với chủ nghĩa xã hội.',
  'Phát huy sức mạnh nhân dân và khối đại đoàn kết toàn dân.',
  'Kết hợp quân sự, chính trị, ngoại giao linh hoạt, sáng tạo.',
  'Kiên trì tích lũy lực lượng, chớp thời cơ để giành thắng lợi quyết định.',
]

function App() {
  return (
    <div className="presentation">
      <header className="hero-slide" id="mo-dau">
        <p className="kicker">LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM / CHƯƠNG 2</p>
        <h1>Chương 2: Đảng lãnh đạo cách mạng cả nước (1954 - 1975)</h1>
        <p className="subtitle">
          Tổng hợp nội dung trọng tâm theo chuẩn kiến thức giáo trình, nhấn mạnh
          giai đoạn 1965 - 1975 với hai chặng chiến lược: chống “Chiến tranh cục
          bộ” và chống “Việt Nam hóa chiến tranh”.
        </p>
        <dl className="hero-meta">
          <div>
            <dt>TRỌNG TÂM</dt>
            <dd>1965 - 1975</dd>
          </div>
          <div>
            <dt>3 MẶT TRẬN</dt>
            <dd>Quân sự / Chính trị / Ngoại giao</dd>
          </div>
          <div>
            <dt>KẾT QUẢ</dt>
            <dd>Giải phóng miền Nam, thống nhất đất nước</dd>
          </div>
        </dl>
        <nav className="topic-nav" aria-label="Điều hướng nhanh nội dung">
          <a href="#lich-su-dau-tranh">Phần 1 lịch sử đấu tranh</a>
          <a href="#tong-quan">Tổng quan</a>
          <a href="#chien-tranh-cuc-bo">Chiến tranh cục bộ</a>
          <a href="#viet-nam-hoa-va-dai-thang">Việt Nam hóa và đại thắng</a>
          <a href="#y-nghia-va-bai-hoc">Ý nghĩa và bài học</a>
          <a href="#ket-luan">Kết luận</a>
        </nav>
      </header>

      <main>
        <section className="slide" id="lich-su-dau-tranh">
          <p className="section-code">
            <kbd>PHẦN 1</kbd> <samp>[ LỊCH SỬ ĐẤU TRANH 1954 - 1975 ]</samp>
          </p>
          <h2>PHẦN 1: LỊCH SỬ ĐẤU TRANH CỦA CÁCH MẠNG VIỆT NAM (1954 - 1975)</h2>
          <p>
            (Dựa trên nền tảng Giáo trình Lịch sử Đảng Cộng sản Việt Nam)
          </p>
          <p>
            Sau Hiệp định Genève (1954), đất nước Việt Nam tạm thời bị chia cắt làm
            hai miền với hai chế độ chính trị khác nhau. Kẻ thù của cách mạng lúc
            này là đế quốc Mỹ - siêu cường số 1 thế giới về kinh tế và quân sự. Đối
            mặt với “gã khổng lồ” này, Đảng đã hoạch định đường lối giương cao ngọn
            cờ độc lập dân tộc và chủ nghĩa xã hội, tiến hành đồng thời hai chiến
            lược cách mạng ở hai miền.
          </p>

          <h3>1. Giai đoạn 1954 - 1965: Chuyển thế chiến lược</h3>
          <p>
            Từ năm 1954, Mỹ hất cẳng Pháp, lập nên chính quyền tay sai Ngô Đình
            Diệm nhằm biến miền Nam thành thuộc địa kiểu mới. Trước sự đàn áp tàn
            bạo bằng luật 10/59, Đảng đã ban hành Nghị quyết Trung ương 15
            (1/1959), cho phép sử dụng bạo lực cách mạng.
          </p>
          <ul>
            <li>
              <strong>Phong trào Đồng Khởi (1959 - 1960):</strong> Từ những cuộc nổi
              dậy lẻ tẻ, phong trào lan rộng khắp miền Nam, làm phá sản chiến lược
              “Chiến tranh đơn phương” của địch. Bước ngoặt này chuyển cách mạng
              miền Nam từ thế “giữ gìn lực lượng” sang thế “tiến công”.
            </li>
            <li>
              <strong>Đánh bại “Chiến tranh đặc biệt” (1961 - 1965):</strong> Bằng
              sự kết hợp ba mũi giáp công (quân sự, chính trị, binh vận), quân và
              dân ta đã làm phá sản chiến lược dồn dân lập “Ấp chiến lược” của Mỹ.
            </li>
          </ul>
          <div className="image-grid two">
            <figure>
              <img src={phongTraoDongKhoi} alt="Phong trào Đồng Khởi lan rộng ở miền Nam giai đoạn 1959-1960" />
              <figcaption>Phong trào Đồng Khởi tạo bước chuyển từ thế giữ gìn lực lượng sang thế tiến công.</figcaption>
            </figure>
            <figure>
              <img src={chienTranhDacBiet} alt="Quân dân miền Nam trong giai đoạn đấu tranh chống Chiến tranh đặc biệt" />
              <figcaption>Đánh bại chiến lược Chiến tranh đặc biệt và phá thế Ấp chiến lược của Mỹ.</figcaption>
            </figure>
          </div>

          <h3>2. Giai đoạn 1965 - 1968: Đánh bại “Chiến tranh cục bộ” - đỉnh cao của nghệ thuật đòn tâm lý</h3>
          <p>
            Sau thất bại trong “Chiến tranh đặc biệt”, Mỹ ồ ạt đưa hàng chục vạn
            quân viễn chinh vào miền Nam và dùng không quân, hải quân đánh phá ác
            liệt miền Bắc. Tương quan lực lượng lúc này nghiêng hẳn về phía Mỹ.
          </p>
          <ul>
            <li>
              <strong>Chủ trương của Đảng:</strong> Tại Hội nghị Trung ương 11 và 12
              (năm 1965), Đảng nêu cao quyết tâm chiến lược: “Kiên quyết đánh bại
              cuộc chiến tranh xâm lược của đế quốc Mỹ trong bất kỳ tình huống
              nào”.
            </li>
            <li>
              <strong>Đỉnh cao Mậu Thân 1968:</strong> Ta không chọn cách đọ hỏa lực
              trực diện ở các chiến trường rừng núi, mà bất ngờ mở cuộc Tổng tiến
              công và nổi dậy vào dịp Tết Mậu Thân, đánh thẳng vào các cơ quan sào
              huyệt của địch tại các đô thị lớn.
            </li>
            <li>
              <strong>Kết quả:</strong> Dù ta chịu tổn thất nhất định, đòn đánh này
              đã tạo ra cú sốc tâm lý cực mạnh, làm lung lay tận gốc ý chí xâm lược
              của giới cầm quyền Mỹ. Mỹ buộc phải “phi Mỹ hóa” chiến tranh, ngừng
              ném bom miền Bắc và ngồi vào bàn đàm phán Paris.
            </li>
          </ul>
          <div className="image-grid two">
            <figure>
              <img src={mauThan1968} alt="Tổng tiến công và nổi dậy Tết Mậu Thân 1968 tại đô thị miền Nam" />
              <figcaption>Mậu Thân 1968 tạo cú sốc chiến lược, làm lung lay ý chí xâm lược của Mỹ.</figcaption>
            </figure>
            <figure>
              <img src={keHoachVietNamHoa} alt="Bộ máy chỉ huy Mỹ triển khai chiến lược quân sự tại Việt Nam" />
              <figcaption>Bối cảnh Mỹ leo thang chiến tranh và sự chuyển dịch các chiến lược quân sự.</figcaption>
            </figure>
          </div>

          <h3>3. Giai đoạn 1969 - 1975: Đánh bại “Việt Nam hóa chiến tranh” và Đại thắng Mùa Xuân</h3>
          <p>
            Nixon lên nắm quyền, rút quân Mỹ dần về nước nhưng tăng cường quân đội
            Sài Gòn theo chiến lược “dùng người Việt đánh người Việt”.
          </p>
          <ul>
            <li>
              <strong>Điện Biên Phủ trên không (1972):</strong> Nhằm ép ta trên bàn
              đàm phán, Mỹ dùng siêu pháo đài bay B-52 ném bom hủy diệt Hà Nội, Hải
              Phòng trong 12 ngày đêm. Bằng sự mưu trí, bộ đội phòng không Việt Nam
              đã cải tiến cách đánh, bắn rơi 34 chiếc B-52, đập tan thần tượng không
              lực Hoa Kỳ. Thắng lợi này buộc Mỹ ký Hiệp định Paris (1/1973), hoàn
              thành mục tiêu “Đánh cho Mỹ cút”.
            </li>
            <li>
              <strong>Đại thắng Mùa Xuân 1975:</strong> Nhận thấy Mỹ suy yếu và không
              còn khả năng can thiệp trở lại, Hội nghị TW 21 (1973) tiếp tục giương
              cao ngọn cờ tấn công. Nắm bắt thời cơ, Đảng mở ba chiến dịch then
              chốt: Tây Nguyên, Huế - Đà Nẵng, và kết thúc bằng chiến dịch Hồ Chí
              Minh lịch sử. Ngày 30/4/1975, miền Nam hoàn toàn giải phóng, thống
              nhất đất nước (“Đánh cho Ngụy nhào”).
            </li>
          </ul>
          <div className="image-grid two">
            <figure>
              <img src={dienBienPhuTrenKhong2} alt="Xác máy bay B-52 bị bắn rơi trong chiến dịch Điện Biên Phủ trên không năm 1972" />
              <figcaption>Điện Biên Phủ trên không 1972: đập tan thần tượng không lực Hoa Kỳ.</figcaption>
            </figure>
            <figure>
              <img src={daiThangMuaXuan1975} alt="Không khí chiến thắng và giải phóng miền Nam trong Đại thắng Mùa Xuân 1975" />
              <figcaption>Đại thắng Mùa Xuân 1975 kết thúc thắng lợi cuộc kháng chiến chống Mỹ.</figcaption>
            </figure>
          </div>
        </section>

        <section className="slide" id="tong-quan">
          <p className="section-code">
            <kbd>SEC 02</kbd> <samp>[ TỔNG QUAN CHIẾN LƯỢC ]</samp>
          </p>
          <h2>2. Lãnh đạo cách mạng cả nước (1965 - 1975)</h2>
          <p>
            Giai đoạn này được chia thành hai phần gắn với sự thay đổi chiến lược
            chiến tranh của đế quốc Mỹ: từ “Chiến tranh cục bộ” (1965 - 1968) sang
            “Việt Nam hóa chiến tranh” (1969 - 1975).
          </p>
          <div className="image-grid two">
            <figure>
              <img src={haiMienVietNam} alt="Bản đồ Việt Nam trong bối cảnh đất nước tạm thời chia cắt hai miền" />
              <figcaption>Bối cảnh chiến lược của cách mạng Việt Nam sau 1954.</figcaption>
            </figure>
            <figure>
              <img src={cachMangCaNuoc} alt="Tư liệu lịch sử về cách mạng cả nước giai đoạn 1965 đến 1975" />
              <figcaption>Cách mạng cả nước dưới sự lãnh đạo thống nhất của Đảng.</figcaption>
            </figure>
          </div>
        </section>

        <section className="slide split" id="chien-tranh-cuc-bo">
          <article className="card-block">
            <p className="section-code">
              <kbd>PHẦN 1</kbd> <samp>[ CHIẾN TRANH CỤC BỘ ]</samp>
            </p>
            <h2>Phần 1: Chống “Chiến tranh cục bộ” (1965 - 1968)</h2>
            <h3>Bối cảnh</h3>
            <p>
              Sau thất bại trong “Chiến tranh đặc biệt”, Mỹ ồ ạt đưa quân viễn chinh
              vào miền Nam và dùng không quân, hải quân đánh phá miền Bắc.
            </p>
            <h3>Chủ trương của Đảng</h3>
            <p>
              Tại Hội nghị Trung ương 11 và 12 (1965), Đảng nêu cao quyết tâm chiến
              lược: “Kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ
              trong bất kỳ tình huống nào”, đồng thời chỉ đạo kết hợp chặt chẽ đấu
              tranh quân sự, chính trị và ngoại giao.
            </p>
            <h3>Kết quả tiêu biểu</h3>
            <ul>
              {phaseOneResults.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-block image-stack">
            <figure>
              <img src={keHoachVietNamHoa} alt="Lãnh đạo Mỹ trình bày kế hoạch chiến tranh tại Việt Nam" />
              <figcaption>Sự chuyển dịch chiến lược chiến tranh của Mỹ qua từng thời kỳ.</figcaption>
            </figure>
            <figure>
              <img src={dienBienPhuTrenKhong} alt="Lực lượng phòng không Việt Nam trong chiến đấu" />
              <figcaption>Thế trận đánh trả kiên cường của quân và dân ta trên cả hai miền.</figcaption>
            </figure>
          </article>
        </section>

        <section className="slide split" id="viet-nam-hoa-va-dai-thang">
          <article className="card-block">
            <p className="section-code">
              <kbd>PHẦN 2</kbd> <samp>[ VIỆT NAM HÓA CHIẾN TRANH ]</samp>
            </p>
            <h2>Phần 2: Chống “Việt Nam hóa chiến tranh” và Đại thắng Mùa Xuân</h2>
            <h3>Bối cảnh</h3>
            <p>
              Mỹ rút dần quân viễn chinh, tăng cường quân đội Sài Gòn với âm mưu
              “dùng người Việt đánh người Việt”.
            </p>
            <h3>Quá trình đấu tranh (1969 - 1975)</h3>
            <ul>
              {phaseTwoProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Đại thắng Mùa Xuân 1975</h3>
            <p>
              Sau Hội nghị TW 21 (1973), Đảng quyết định mở Tổng tiến công và nổi
              dậy Mùa Xuân 1975. Qua ba đòn chiến lược: Tây Nguyên, Huế - Đà Nẵng
              và Hồ Chí Minh, quân ta giải phóng hoàn toàn miền Nam, thống nhất đất
              nước: “Đánh cho ngụy nhào”.
            </p>
          </article>

          <article className="card-block image-stack">
            <figure>
              <img src={b52BiBanHa} alt="Xác máy bay B-52 bị bắn rơi" />
              <figcaption>Chiến thắng trên bầu trời tạo bước ngoặt chiến lược.</figcaption>
            </figure>
            <figure>
              <img src={hiepDinhParis} alt="Lễ ký Hiệp định Paris năm 1973" />
              <figcaption>Hiệp định Paris 1973: bước ngoặt “Đánh cho Mỹ cút”.</figcaption>
            </figure>
          </article>
        </section>

        <section className="slide split" id="y-nghia-va-bai-hoc">
          <article className="card-block">
            <p className="section-code">
              <kbd>MỤC 3</kbd> <samp>[ Ý NGHĨA LỊCH SỬ ]</samp>
            </p>
            <h2>3. Ý nghĩa lịch sử</h2>
            <ul>
              {meanings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-block">
            <p className="section-code">
              <kbd>LESSONS</kbd> <samp>[ KINH NGHIỆM LÃNH ĐẠO ]</samp>
            </p>
            <h2>Kinh nghiệm lãnh đạo (Bài học lịch sử)</h2>
            <ul>
              {lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="slide closing" id="ket-luan">
          <h2>Kết luận</h2>
          <p>
            Thắng lợi giai đoạn 1954 - 1975 là minh chứng tiêu biểu cho bản lĩnh,
            trí tuệ và năng lực lãnh đạo của Đảng trong chiến tranh cách mạng hiện
            đại. Đây là nền tảng lý luận và thực tiễn quan trọng để vận dụng vào sự
            nghiệp xây dựng và bảo vệ Tổ quốc trong thời kỳ mới.
          </p>
          <p className="closing-note">
            “Độc lập dân tộc gắn liền với chủ nghĩa xã hội là sợi chỉ đỏ xuyên suốt.”
          </p>
        </section>

      </main>
    </div>
  )
}

export default App
