import {
  BookText,
  CalendarDays,
  CreditCard,
  GraduationCap,
} from "lucide-react";

export interface StudentSidebarProps {
  menuItems: {
    title: string;
    tooltip: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export interface ProfileData {
  name: string;
  id: string;
  href: string;
}

export const ProfileData: ProfileData = {
  name: "ถิรวัฒน์ พงศ์ปฏิสนธิพงศ์ปฏิสนธิ",
  id: "6410450958",
  href: "/pages/student/profile",
};

export const StudentSidebarData: StudentSidebarProps = {
  menuItems: [
    {
      title: "ตารางเรียน",
      tooltip: "schedule",
      href: "/pages/student/schedule",
      icon: (
        <CalendarDays
          style={{ width: "2rem", height: "2rem" }}
          className="text-white"
        />
      ),
    },
    {
      title: "ตรวจสอบผลการเรียน",
      tooltip: "grade",
      href: "/pages/student/grade",
      icon: (
        <GraduationCap
          style={{ width: "2rem", height: "2rem" }}
          className="text-white"
        />
      ),
    },
    {
      title: "สถานะการชำระเงิน",
      tooltip: "payment",
      href: "/payment",
      icon: (
        <CreditCard
          style={{ width: "2rem", height: "2rem" }}
          className="text-white"
        />
      ),
    },
    {
      title: "ประวัตินิสิต",
      tooltip: "profile",
      href: "/pages/student/profile",
      icon: (
        <BookText
          style={{ width: "2rem", height: "2rem" }}
          className="text-white"
        />
      ),
    },
  ],
};
