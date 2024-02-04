import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../context/ThemeContext';


const KegiatanSekolah = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen p-8 pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
    <div className="max-w-4xl mx-auto">
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`}>Kegiatan Sekolah</h2>

        {/* Vertical Timeline */}
        <VerticalTimeline layout="1-column-left">
          {/* Kegiatan 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="12 Januari 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Kegiatan Ekstrakurikuler</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>
          </VerticalTimelineElement>

          {/* Kegiatan 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="20 Februari 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Pelatihan Siswa</h3>
            <p>
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
          </VerticalTimelineElement>

          {/* Kegiatan 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="5 Maret 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Pentas Seni Sekolah</h3>
            <p>
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            </p>
          </VerticalTimelineElement>

          {/* Kegiatan 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="15 April 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Olimpiade Sains</h3>
            <p>
              Fusce mauris. Vestibulum luctus nibh at lectus. Sed bibendum, nulla a faucibus semper, leo velit ultricies tellus.
            </p>
          </VerticalTimelineElement>

          {/* Kegiatan 5 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="8 Mei 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Pramuka - Kemah Bakti</h3>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </VerticalTimelineElement>

          {/* Kegiatan 6 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3490dc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3490dc' }}
            date="20 Juni 2023"
            iconStyle={{ background: '#3490dc', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Wisuda Siswa</h3>
            <p>
              Etiam commodo dui eget wisi. Maecenas libero. Curabitur a felis in nunc fringilla tristique.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default KegiatanSekolah;
