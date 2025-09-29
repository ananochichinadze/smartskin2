"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Heart, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About SmartSkin",
      subtitle: "Young Innovators, Big Dreams",
      mission:
        "We are a young team of 15-year-olds creating revolutionary technology to make health simple and easy for everyone. Our mission is to democratize health monitoring and empower people to take control of their wellness journey.",
      vision: "Our Vision",
      visionText:
        "We believe that health technology should be accessible, intuitive, and empowering. SmartSkin represents our commitment to creating solutions that work for everyone, regardless of age or technical expertise.",
      values: "Our Values",
      valuesList: [
        {
          icon: Heart,
          title: "Health First",
          description: "We prioritize your wellbeing above everything else",
        },
        {
          icon: Users,
          title: "Accessibility",
          description: "Technology that works for everyone, everywhere",
        },
        {
          icon: Target,
          title: "Precision",
          description: "Accurate monitoring you can trust",
        },
        {
          icon: Lightbulb,
          title: "Innovation",
          description: "Pushing boundaries to create better solutions",
        },
      ],
      team: "Meet Our Team",
      teamText:
        "Despite our young age, we bring fresh perspectives and boundless energy to health technology. We're not just building a product – we're creating a movement toward better health for all.",
    },
    ka: {
      title: "SmartSkin-ის შესახებ",
      subtitle: "ახალგაზრდა ინოვატორები, დიდი ოცნებები",
      mission:
        "ჩვენ ვართ ახალგაზრდა გუნდი 15 წლის ბავშვებისგან, რომლებიც ქმნიან რევოლუციურ ტექნოლოგიას ჯანმრთელობის მარტივი და ადვილი გახადების მიზნით ყველასთვის. ჩვენი მისიაა ჯანმრთელობის მონიტორინგის დემოკრატიზაცია და ადამიანების გაძლიერება მათი კეთილდღეობის მგზავრობისთვის.",
      vision: "ჩვენი ხედვა",
      visionText:
        "ჩვენ გვჯერა, რომ ჯანმრთელობის ტექნოლოგია უნდა იყოს ხელმისაწვდომი, ინტუიციური და გამაძლიერებელი. SmartSkin წარმოადგენს ჩვენს ვალდებულებას შევქმნათ გადაწყვეტილებები, რომლებიც მუშაობს ყველასთვის.",
      values: "ჩვენი ღირებულებები",
      valuesList: [
        {
          icon: Heart,
          title: "ჯანმრთელობა პირველ რიგში",
          description: "ჩვენ ვაღიარებთ თქვენს კეთილდღეობას ყველაფერზე მაღლა",
        },
        {
          icon: Users,
          title: "ხელმისაწვდომობა",
          description: "ტექნოლოგია, რომელიც მუშაობს ყველასთვის, ყველგან",
        },
        {
          icon: Target,
          title: "სიზუსტე",
          description: "ზუსტი მონიტორინგი, რომელსაც შეგიძლიათ ენდოთ",
        },
        {
          icon: Lightbulb,
          title: "ინოვაცია",
          description: "საზღვრების გადალახვა უკეთესი გადაწყვეტილებების შესაქმნელად",
        },
      ],
      team: "გაიცანით ჩვენი გუნდი",
      teamText:
        "ჩვენი ახალგაზრდა ასაკის მიუხედავად, ჩვენ ვაქვთ ახალი პერსპექტივები და უსაზღვრო ენერგია ჯანმრთელობის ტექნოლოგიისთვის. ჩვენ არ ვქმნით მხოლოდ პროდუქტს – ჩვენ ვქმნით მოძრაობას უკეთესი ჯანმრთელობისკენ ყველასთვის.",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h1>
          <p className="text-2xl text-gray-700 font-medium">{currentContent.subtitle}</p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 bg-gradient-to-r from-pink-100 to-purple-100 border-0 shadow-xl">
          <CardContent className="p-8">
            <p className="text-lg text-gray-800 leading-relaxed text-center">{currentContent.mission}</p>
          </CardContent>
        </Card>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {currentContent.vision}
          </h2>
          <Card className="bg-gradient-to-r from-cyan-100 to-blue-100 border-0 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-800 leading-relaxed text-center">{currentContent.visionText}</p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            {currentContent.values}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.valuesList.map((value, index) => {
              const Icon = value.icon
              const gradients = [
                "from-orange-400 to-pink-500",
                "from-pink-400 to-purple-500",
                "from-purple-400 to-cyan-500",
                "from-cyan-400 to-blue-500",
              ]
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${gradients[index]} flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            {currentContent.team}
          </h2>
          <Card className="bg-gradient-to-r from-green-100 to-teal-100 border-0 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-800 leading-relaxed">{currentContent.teamText}</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
