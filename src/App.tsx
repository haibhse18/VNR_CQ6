import './App.css'
import b52BiBanHa from './image/b52bibanha.jpg'
import cachMangCaNuoc from './image/cach mang ca nuoc.jpg'
import dienBienPhuTrenKhong from './image/dienbienphutrenkhong.jpg'
import haiMienVietNam from './image/2 mien vietnam.png'
import hiepDinhParis from './image/hiepdinhparis.jpg'
import keHoachVietNamHoa from './image/kehoachvietnamhoachientranh.jpg'

const phaseOneResults = [
  'Ở miền Nam: Đập tan các cuộc phản công mùa khô của Mỹ và chính quyền Sài Gòn.',
  'Đỉnh cao là Tổng tiến công và nổi dậy Tết Mậu Thân 1968, giáng đòn mạnh vào ý chí xâm lược của Mỹ.',
  'Mỹ buộc phải “phi Mỹ hóa” chiến tranh, ngừng ném bom miền Bắc và chấp nhận đàm phán tại Paris.',
  'Ở miền Bắc: Đánh bại chiến tranh phá hoại lần thứ nhất, bảo vệ vững chắc hậu phương và chi viện tối đa cho tiền tuyến miền Nam.',
]

const phaseTwoProcess = [
  'Quân và dân ta liên tiếp đánh bại các cuộc hành quân lớn của địch trong chiến lược “Việt Nam hóa chiến tranh”.',
  'Năm 1972, chiến thắng “Điện Biên Phủ trên không” đập tan cuộc tập kích B-52 của Mỹ trong 12 ngày đêm.',
  'Thắng lợi này buộc Mỹ ký Hiệp định Paris (1/1973), rút toàn bộ quân Mỹ về nước: “Đánh cho Mỹ cút”.',
  'Nắm bắt thời cơ chiến lược, Đảng mở Tổng tiến công và nổi dậy Mùa Xuân 1975 qua 3 chiến dịch: Tây Nguyên, Huế - Đà Nẵng, Hồ Chí Minh.',
]

const meanings = [
  {
    title: 'Đối với dân tộc',
    detail:
      'Kết thúc thắng lợi 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng dân tộc, hoàn thành cách mạng dân tộc dân chủ nhân dân, thống nhất đất nước; đưa cả nước bước vào kỷ nguyên độc lập, tự do và đi lên chủ nghĩa xã hội.',
  },
  {
    title: 'Đối với quốc tế',
    detail:
      'Đánh bại cuộc chiến tranh xâm lược thực dân kiểu mới quy mô lớn nhất sau Thế chiến II, làm suy yếu hệ thống đế quốc chủ nghĩa và cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.',
  },
]

const lessons = [
  'Giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, kết hợp sức mạnh của cả hai miền trong một chiến lược thống nhất.',
  'Tin tưởng và dựa vào sức mạnh của nhân dân, phát huy cao độ khối đại đoàn kết toàn dân tộc.',
  'Phát huy sức mạnh hậu phương miền Bắc vững mạnh toàn diện, bảo đảm chi viện quyết định cho miền Nam.',
  'Vận dụng sáng tạo phương pháp cách mạng: kết hợp chặt chẽ quân sự - chính trị - ngoại giao, thắng từng bước để tiến tới thắng lợi hoàn toàn.',
  'Tăng cường vai trò lãnh đạo của Đảng, giữ vững tinh thần độc lập, tự chủ trong hoạch định đường lối chiến lược.',
]

const giantOpponentLessons = [
  'Tết Mậu Thân 1968 là đòn đánh vào ý chí; ý phụ: chọn thời điểm và mục tiêu bất ngờ để tạo cú sốc chiến lược vượt giá trị quân sự thuần túy.',
  'Điện Biên Phủ trên không 1972 chứng minh trí tuệ quyết định hiệu quả; ý phụ: ta cải tiến cách đánh, biến công nghệ cũ thành năng lực tác chiến mới.',
  'Chiến tranh nhân dân tạo thế trận nhiều tầng; ý phụ: phối hợp hậu phương - tiền tuyến cùng quân sự, chính trị, ngoại giao để bào mòn lợi thế đối phương.',
  'Lấy thế thắng lực là nghệ thuật tạo ưu thế tương đối; ý phụ: thắng bằng tổ chức, nhịp độ và điểm đánh đúng, không phải đọ số lượng vũ khí.',
]

const practicalApplications = [
  'Doanh nghiệp nhỏ không đọ vốn trực diện; ý phụ: tập trung thị trường ngách và giải quyết một vấn đề khách hàng thật rõ.',
  'Lấy nhanh thắng chậm; ý phụ: vận hành theo vòng lặp ngắn nghiên cứu - thử nghiệm - cải tiến để ra quyết định sát thực tế.',
  'Lấy linh hoạt thắng cồng kềnh; ý phụ: cá nhân hóa dịch vụ và điều chỉnh sản phẩm nhanh theo phản hồi.',
  'Phát triển cá nhân bằng năng lực thực chiến; ý phụ: hồ sơ dự án thật, khả năng chịu áp lực và tinh thần học liên tục tạo lợi thế bền vững.',
]

const threeTFramework = [
  {
    title: 'TRÍ',
    points: [
      'Nhận diện điểm mù: tìm đúng chỗ yếu để tạo đột phá.',
      'Tạo bất ngờ: chọn cách làm khác lối mòn để đổi cục diện.'
    ]
  },
  {
    title: 'THẾ',
    points: [
      'Đi đường dài: chia mục tiêu theo chặng, tích lũy thắng lợi nhỏ.',
      'Tái đầu tư: dùng kết quả mới để nâng cấp kỹ năng và quy trình.'
    ]
  },
  {
    title: 'TÂM',
    points: [
      'Giữ bản lĩnh: giữ kỷ luật, niềm tin và sức phục hồi khi gặp khó.',
      'Kết nối hợp lực: xây mạng lưới đồng minh để khuếch đại sức mạnh.'
    ]
  }
]

const davidGoliathPerspective = [
  '“Gã khổng lồ” thời nay có thể là đối thủ lớn hoặc áp lực nguồn lực; ý phụ: cần nhận diện đúng bản chất thách thức trước khi hành động.',
  'Rào cản lớn nhất thường là tâm lý sợ thua; ý phụ: nếu thua trong tư duy, ta mất lợi thế trước khi bước vào cuộc chơi.',
  'Không đối đầu trực diện khi chênh lệch quá lớn; ý phụ: tái định nghĩa mục tiêu và luật chơi để triệt tiêu ưu thế mặc định của đối thủ.',
  'Nguồn lực vật chất hữu hạn; ý phụ: sáng tạo, tổ chức và ý chí có thể tích lũy để tạo bước ngoặt dài hạn.',
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
          <a href="#tong-quan">Tổng quan</a>
          <a href="#chien-tranh-cuc-bo">Chiến tranh cục bộ</a>
          <a href="#viet-nam-hoa-va-dai-thang">Việt Nam hóa và đại thắng</a>
          <a href="#y-nghia-va-bai-hoc">Ý nghĩa và bài học</a>
          <a href="#ket-luan">Kết luận</a>
          <a href="#chu-de-bo-sung">Chủ đề bổ sung</a>
        </nav>
      </header>

      <main>
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
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {phaseOneResults.map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
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
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {phaseTwoProcess.map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
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
            <h2>3. Ý nghĩa lịch sử (1954 - 1975)</h2>
            {meanings.map((item) => (
              <div key={item.title} className="meaning-item" style={{ marginBottom: '16px' }}>
                <h3 style={{ marginBottom: '8px' }}>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>

          <article className="card-block">
            <p className="section-code">
              <kbd>LESSONS</kbd> <samp>[ KINH NGHIỆM LÃNH ĐẠO ]</samp>
            </p>
            <h2>Kinh nghiệm lãnh đạo (Bài học lịch sử)</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {lessons.map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
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

        <section className="slide closing" id="chu-de-bo-sung">
          <p className="section-code">
            <kbd>TOPIC+</kbd> <samp>[ BẢN BỔ SUNG CHUYÊN SÂU ]</samp>
          </p>
          <h2>
            CHỦ ĐỀ: Một nước Việt Nam chống lại đế quốc hùng mạnh - bài học về lấy thế thắng lực và tinh thần quyết thắng
          </h2>
          <p>
            Bản bổ sung này được tóm tắt theo dạng ngắn gọn: mỗi mục gồm một ý
            chính và các ý phụ đủ dùng để thuyết trình, dễ nhớ và dễ chuyển ý.
          </p>

          <div className="deep-stack">
            <article className="card-block">
              <h3>1. Đặt vấn đề: Hiệu ứng David và Goliath trong thời đại mới</h3>
              <p>
                Mục này làm rõ bản chất của “thế yếu” trong bối cảnh hiện đại và
                lý do vì sao tâm lý, tư duy chiến lược và khả năng tái định nghĩa
                cuộc chơi quan trọng không kém nguồn lực ban đầu.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {davidGoliathPerspective.map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>2. Cơ sở lý thuyết: Giải mã nghệ thuật “Lấy thế thắng lực” (1965 - 1975)</h3>
              <p>
                Các dẫn chứng lịch sử dưới đây cho thấy Đảng đã lựa chọn đúng điểm
                đột phá để chuyển bất lợi về vật chất thành ưu thế về thế trận,
                ý chí và tính chính nghĩa.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {giantOpponentLessons.map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>3. Cơ sở vận dụng: Thuật toán đối đầu với “Gã khổng lồ” trong thực tiễn</h3>
              <p>
                Từ bài học lịch sử, có thể chuyển hóa thành mô hình hành động cụ
                thể cho doanh nghiệp nhỏ, người đi làm và người học trong môi trường
                cạnh tranh bất cân xứng.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {practicalApplications.map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>4. Giải pháp và bài học: Nguyên tắc hành động 3T (Trí - Thế - Tâm)</h3>
              <p>
                Khung 3T là nguyên tắc ngắn gọn, áp dụng trực tiếp cho học tập,
                công việc và khởi nghiệp khi đối mặt thách thức lớn.
              </p>

              <ul className="three-t-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {threeTFramework.map((item) => (
                  <li key={item.title} style={{ marginBottom: '16px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#d32f2f' }}>
                      {item.title}
                    </strong>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          style={{
                            paddingLeft: '12px',
                            borderLeft: '3px solid #ddd',
                            marginBottom: '8px',
                            color: '#555'
                          }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

            </article>
          </div>

          <p className="closing-note final-thesis">
            Kẻ mạnh không phải lúc nào cũng thắng; người chiến thắng mới là kẻ mạnh thực sự. Di sản 1954 - 1975 khẳng định: khi có mục tiêu
            chính nghĩa, chiến lược tạo thế khôn ngoan và tinh thần không khuất phục, mọi giới hạn về nguồn lực đều có thể bị phá vỡ.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App